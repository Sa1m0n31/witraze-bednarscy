const express = require("express");
const router = express.Router();
const multer = require("multer");
const got = require("got");
const con = require("../databaseConnection");
const path = require("path");

con.connect(err => {
   /* ADD CROSS-SELLS */
   const addCrossSells = (product1, product2) => {
      const values = [product1, product2];
      const query = 'INSERT INTO cross-sells VALUES (NULL, product1, product2)';
      con.query(query, values);
   }

   /* GET NEW ID */
   router.get("/last-product", (request, response) => {
      const query = 'SELECT id FROM products ORDER BY date DESC LIMIT 1';
      con.query(query, (err, res) => {
         if(res[0]) {
            response.send({
               result: res[0].id
            });
         }
         else {
            response.send({
               result: 0
            });
         }
      })
   });

   /* ADD PRODUCT */
   router.post("/add-product", (request, response) => {
      let filenames = [];
      let categories = [];

      /* Modify IMAGES table */
      const storage = multer.diskStorage({
         destination: "media/products/",
         filename: function(req, file, cb){
            const fName = file.fieldname + Date.now() + path.extname(file.originalname);
            filenames.push(fName);
            cb(null, fName);
         }
      });

      const upload = multer({
         storage: storage
      }).fields([{ name: 'gallery', maxCount: 10 }]);

      upload(request, response, (err, res) => {
         if (err) throw err;

         /* Prepare */
         let { id, mainImageIndex, name, price, shortDescription, recommendation, hidden } = request.body;
         hidden = hidden === "hidden";
         recommendation = recommendation === "true";
         filenames.reverse();

         /* Get categories */
         Object.entries(request.body).forEach(item => {
            if(item[0].split("-")[0] === 'category') {
               if(item[1] === 'true') {
                  categories.push(parseInt(item[0].split("-")[1]));
               }
            }
         });

         if(!categories.length) categories.push(0);

         /* Set main image as the last one in filenames */
         let tmp = filenames[filenames.length-1];
         filenames[filenames.length-1] = filenames[mainImageIndex];
         filenames[mainImageIndex] = tmp;

         /* 1 - ADD PRODUCT TO PRODUCTS TABLE */
         const values = [id, name, price, shortDescription, null, recommendation, hidden];
         const query = 'INSERT INTO products VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?, ?, NULL)';
         con.query(query, values, (err, res) => {
            if(res) {
               /* 2nd - ADD CATEGORIES */
               const productId = res.insertId;
               categories.forEach((item, index, array) => {
                  if(item) {
                     const values = [productId, item];
                     const query = 'INSERT INTO product_categories VALUES (NULL, ?, ?)';
                     con.query(query, values, (err, res) => {
                        if(index === array.length-1) {
                           /* 3rd - ADD IMAGES TO IMAGES TABLE */
                           filenames.forEach((item, index, array) => {
                              const values = ["products/" + item, productId];
                              const query = 'INSERT INTO images VALUES (NULL, ?, ?)';
                              console.log(item);

                              con.query(query, values, (err, res) => {
                                 if(index === array.length-1) {
                                    /* 4th - MODIFY MAIN_IMAGE COLUMN IN PRODUCTS TABLE */
                                    if(res) {
                                       console.log(res.insertId);
                                       const mainImageId = res.insertId;
                                       const values = [mainImageId, productId];
                                       const query = 'UPDATE products SET main_image = ? WHERE id = ?';
                                       con.query(query, values, (err, res) => {
                                          if(res) response.redirect("http://localhost:3000/panel/dodaj-produkt?add=1");
                                          else response.redirect("http://localhost:3000/panel/dodaj-produkt?add=0");
                                       });
                                    }
                                    else {
                                       response.redirect("http://localhost:3000/panel/dodaj-produkt?add=0");
                                    }
                                 }
                              })
                           });
                        }
                     });
                  }
                  else {
                     /* 4th - ADD IMAGES TO IMAGES TABLE */
                     filenames.forEach((item, index, array) => {
                        const values = ["products/" + item, productId];
                        const query = 'INSERT INTO images VALUES (NULL, ?, ?)';
                        console.log(item);

                        con.query(query, values, (err, res) => {
                           if(index === array.length-1) {
                              /* 4 - MODIFY MAIN_IMAGE COLUMN IN PRODUCTS TABLE */
                              if(res) {
                                 console.log(res.insertId);
                                 const mainImageId = res.insertId;
                                 const values = [mainImageId, productId];
                                 const query = 'UPDATE products SET main_image = ? WHERE id = ?';
                                 con.query(query, values, (err, res) => {
                                    if(res) response.redirect("http://localhost:3000/panel/dodaj-produkt?add=1");
                                    else response.redirect("http://localhost:3000/panel/dodaj-produkt?add=0");
                                 });
                              }
                              else {
                                 response.redirect("http://localhost:3000/panel/dodaj-produkt?add=0");
                              }
                           }
                        })
                     });
                  }
               });
            }
            else {
               response.redirect("http://localhost:3000/panel/dodaj-produkt?add=0");
            }
         });
      });
   });

   /* UPDATE PRODUCT */
   router.post("/update-product", (request, response) => {
      let filenames = [];
      let categories = [];

      /* Modify IMAGES table */
      const storage = multer.diskStorage({
         destination: "media/products/",
         filename: function(req, file, cb){
            const fName = file.fieldname + Date.now() + path.extname(file.originalname);
            filenames.push(fName);
            cb(null, fName);
         }
      });

      const upload = multer({
         storage: storage
      }).fields([{ name: 'gallery', maxCount: 10 }]);

      upload(request, response, (err, res) => {
         if (err) throw err;

         /* Prepare */
         let { id, mainImageId, name, price, shortDescription, recommendation, hidden } = request.body;
         hidden = hidden === "hidden";
         recommendation = recommendation === "true";
         filenames.reverse();

         /* Get categories */
         Object.entries(request.body).forEach(item => {
            if(item[0].split("-")[0] === 'category') {
               if(item[1] === 'true') {
                  categories.push(parseInt(item[0].split("-")[1]));
               }
            }
         });

         if(!categories.length) categories.push(0);

         /* 1 - ADD PRODUCT TO PRODUCTS TABLE */
         const values = [name, price, shortDescription, recommendation, hidden, id];
         const query = 'UPDATE products SET name = ?, price = ?, description = ?, recommendation = ?, hidden = ? WHERE id = ?';
         con.query(query, values, (err, res) => {
            if(res) {
               /* HERE WE HAVE TO CHECK WHETHER WE HAVE TO SEND NOTIFICATION TO CLIENT */
               got.post("http://localhost:3000/notification/check-notifications", {
                  json: { productId: id },
                  responseType: "json"
               })
                   .then(res => {
                      console.log("RESPONSE...");
                      console.log(res.data);
                   });

               /* 2 - ADD CATEGORIES */
               categories.forEach((item, index, array) => {
                  const valuesDelete = [id];
                  const queryDelete = 'DELETE FROM product_categories WHERE product_id = ?';
                  con.query(queryDelete, valuesDelete, (err, res) => {
                     if(item) {
                        console.log("category: " + item);
                        /* THERE ARE CATEGORIES */
                        const values = [id, item];
                        const query = 'INSERT INTO product_categories VALUES (NULL, ?, ?)';
                        con.query(query, values);
                        if(index === array.length-1) {
                           /* 3 - ADD IMAGES TO IMAGES TABLE */
                           if(filenames.length) {
                              con.query('DELETE FROM images WHERE product_id = ?', [id]);

                              filenames.forEach((item, index, array) => {
                                 const values = ["products/" + item, id];
                                 const query = 'INSERT INTO images VALUES (NULL, ?, ?)';

                                 con.query(query, values, (err, res) => {
                                    if(index === array.length-1) {
                                       /* 4 - MODIFY MAIN_IMAGE COLUMN IN PRODUCTS TABLE */
                                       if(res) {
                                          console.log("I'm ready to modify mainImageId");
                                          const mainImageId = res.insertId;
                                          const values = [mainImageId, id];
                                          const query = 'UPDATE products SET main_image = ? WHERE id = ?';
                                          con.query(query, values, (err, res) => {
                                             if(res) response.redirect("http://localhost:3000/panel/dodaj-produkt?add=1");
                                             else response.redirect("http://localhost:3000/panel/dodaj-produkt?add=0");
                                          });
                                       }
                                       else {
                                          response.redirect("http://localhost:3000/panel/dodaj-produkt?add=0");
                                       }
                                    }
                                 })
                              });
                           }
                           else {
                              /* 4 - MODIFY MAIN_IMAGE COLUMN IN PRODUCTS TABLE */
                              const values = [mainImageId, id];
                              const query = 'UPDATE products SET main_image = ? WHERE id = ?';
                              con.query(query, values, (err, res) => {
                                 if(res) response.redirect("http://localhost:3000/panel/dodaj-produkt?add=1");
                                 else response.redirect("http://localhost:3000/panel/dodaj-produkt?add=0");
                              });
                           }
                        }
                     }
                     else {
                        /* THERE IS NO ANY CATEGORY */
                        /* 3rd - ADD IMAGES TO IMAGES TABLE */
                        if(filenames.length) {
                           console.log("no category, yes images");
                           console.log(id);
                           con.query('DELETE FROM images WHERE product_id = ?', [id]);

                           filenames.forEach((item, index, array) => {
                              const values = ["products/" + item, id];
                              const query = 'INSERT INTO images VALUES (NULL, ?, ?)';

                              con.query(query, values, (err, res) => {
                                 if(index === array.length-1) {
                                    /* 4 - MODIFY MAIN_IMAGE COLUMN IN PRODUCTS TABLE */
                                    if(res) {
                                       const mainImageId = res.insertId;
                                       const values = [mainImageId, id];
                                       const query = 'UPDATE products SET main_image = ? WHERE id = ?';
                                       con.query(query, values, (err, res) => {
                                          if(res) response.redirect("http://localhost:3000/panel/dodaj-produkt?add=1");
                                          else response.redirect("http://localhost:3000/panel/dodaj-produkt?add=0");
                                       });
                                    }
                                    else {
                                       response.redirect("http://localhost:3000/panel/dodaj-produkt?add=0");
                                    }
                                 }
                              })
                           });
                        }
                        else {
                           console.log("no category. no images");
                           const values = [mainImageId, id];
                           const query = 'UPDATE products SET main_image = ? WHERE id = ?';
                           con.query(query, values, (err, res) => {
                              if(res) response.redirect("http://localhost:3000/panel/dodaj-produkt?add=1");
                              else response.redirect("http://localhost:3000/panel/dodaj-produkt?add=0");
                           });
                        }
                     }
                  });
               });
            }
            else {
               response.redirect("http://localhost:3000/panel/dodaj-produkt?add=0");
            }
         });
      });

   });

   /* GET RECCOMMENDATIONS */
   router.get('/get-recommendations', (request, response) => {
      const query = 'SELECT * FROM products p JOIN images i ON p.main_image = i.id WHERE recommendation = 1 LIMIT 3';
      console.log("recoms");
      con.query(query, (err, res) => {
         if(res) {
            response.send({
               result: res
            });
         }
         else {
            response.send({
               result: 0
            });
         }
      })
   });

   /* GET MEN RECOMMENDATIONS */
   router.get("/get-men-recommendations", (request, response) => {
         const query = 'SELECT p.name, i.file_path, p.price FROM products p JOIN images i ON p.main_image = i.id JOIN product_categories pc ON pc.product_id = p.id JOIN categories c ON c.id = pc.category_id WHERE recommendation = 1 AND LOWER(c.name) != "damskie" LIMIT 3;'
         con.query(query, (err, res) => {
            if(res) {
               response.send({
                  result: res
               });
            }
            else {
               response.send({
                  result: 0
               });
            }
         });
   });

   /* GET Women RECOMMENDATIONS */
   router.get("/get-women-recommendations", (request, response) => {
      const query = 'SELECT p.name, i.file_path, p.price FROM products p JOIN images i ON p.main_image = i.id JOIN product_categories pc ON pc.product_id = p.id JOIN categories c ON c.id = pc.category_id WHERE recommendation = 1 AND LOWER(c.name) != "męskie" LIMIT 3;'
      con.query(query, (err, res) => {
         if(res) {
            response.send({
               result: res
            });
         }
         else {
            response.send({
               result: 0
            });
         }
      });
   });

   /* REMOVE PRODUCT */
   router.post("/delete", (request, response) => {
      const { id } = request.body;
      const values = [id];

      const query = 'DELETE FROM products WHERE id = ?';
      con.query(query, values, (err, res) => {
         console.log(err);
         let result = 0;
         if(res) result = 1;
         response.send({
            result
         });
      });
   });

   /* REMOVE CURRENT CROSS-SELLS */
   const deleteCrossSellsForProduct = (productId) => {
      const values = [productId];
      const query = 'DELETE FROM cross-sells WHERE product1 = ?';
      con.query(query, values);
   }

   /* GET ALL PRODUCTS */
   router.get("/get-all-products", (request, response) => {
      const query = 'SELECT p.id, p.name, i.file_path as image, p.price, p.date, p.stock_id, COALESCE(c.name, "Brak") as category_name, p.hidden FROM products p ' +
      'LEFT OUTER JOIN product_categories pc ON pc.product_id = p.id ' +
          'LEFT OUTER JOIN categories c ON c.id = pc.category_id ' +
      'LEFT OUTER JOIN images i ON p.main_image = i.id GROUP BY p.id ORDER BY p.date DESC';

      con.query(query, (err, res) => {
         if(res) {
            response.send({
               result: res
            });
         }
         else {
            response.send({
               result: null
            });
         }
      });
   });

   /* GET SINGLE PRODUCT BY ID */
   router.post("/get-product-by-id", (request, response) => {
      const { id } = request.body;
      const values = [id];
      const query = 'SELECT name FROM products p WHERE id = ?';
      con.query(query, values, (err, res) => {
         if(res[0]) {
            response.send({
               result: res[0].name
            });
         }
         else {
            response.send({
               result: 0
            });
         }
      })
   });

   /* GET SINGLE PRODUCT BY NAME */
   router.post("/get-product-by-name", (request, response) => {
      const { name } = request.body;
      const values = [name];
      /* Query uses custom MySQL function - SPLIT_STR */
      const query = 'SELECT p.id as id, p.name, p.price, ' +
          'p.description, p.date, i.file_path as file_path, ' +
          's.size_1_name, s.size_2_name, s.size_3_name, s.size_4_name, s.size_5_name, ' +
          's.size_1_stock, s.size_2_stock, s.size_3_stock, s.size_4_stock, s.size_5_stock ' +
          'FROM products p LEFT OUTER JOIN images i ON i.id = p.main_image ' +
          'LEFT OUTER JOIN products_stock s ON p.stock_id = s.id ' +
          'WHERE REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(LOWER(SPLIT_STR(p.name, "/", 1)), "ł", "l"), "ę", "e"), "ą", "a"), "ć", "c"), "ń", "n"), "ó", "o"), "ś", "s"), "ź", "z"), "ż", "z") = ?';
      con.query(query, values, (err, res) => {
         console.log(res);
         console.log(err);
         response.send({
            result: res
         });
      });
   });

   /* GET IMAGE BY ID */
   router.post("/get-image", (request, response) => {
      const { id } = request.body;
      const values = [id];
      const query = 'SELECT file_path FROM images WHERE id = ?';
      con.query(query, values, (err, res) => {
         if(res[0]) {
            response.send({
               result: res[0]
            });
         }
         else {
            response.send({
               result: 0
            });
         }
      });
   });

   /* GET PRODUCT CATEGORIES */
   router.post("/get-product-categories", (request, response) => {
      const { id } = request.body;
      const values = [id];
      const query = 'SELECT * FROM product_categories WHERE product_id = ?';
      con.query(query, values, (err, res) => {
         if(res) {
            response.send({
               result: res
            });
         }
         else {
            response.send({
               result: 0
            });
         }
      });
   });

   /* GET SINGLE PRODUCT DETAILS (CLIENT) */
   router.post("/single-product", (request, response) => {
      const { id } = request.body;
      const values = [id];
      const query = 'SELECT p.id as id, p.name, p.price, ' +
          'p.description, p.date, p.recommendation, p.hidden, ' +
          'i.file_path as file_path, s.size_1_name, s.size_1_stock, s.size_2_name, s.size_2_stock, s.size_3_name, s.size_3_stock, s.size_4_name, s.size_4_stock, s.size_5_name, s.size_5_stock ' +
          'FROM products p ' +
          'LEFT OUTER JOIN images i ON i.id = p.main_image ' +
          'LEFT OUTER JOIN products_stock s ON s.id = p.stock_id ' +
          'WHERE p.id = ?';
      con.query(query, values, (err, res) => {
         if(res) {
            response.send({
               result: res
            });
         }
         else {
            response.send({
               result: null
            });
         }
      });
   });

   /* GET PRODUCT DETAILS */
   router.post("/product-data", (request, response) => {
      const { id } = request.body;
      const values = [id];
      const query = 'SELECT * FROM products WHERE id = ?';
      con.query(query, values, (err, res) => {
         if(res) {
            response.send({
               result: res
            });
         }
         else {
            response.send({
               result: null
            });
         }
      });
   });

   /* GET PRODUCTS BY CATEGORY */
   router.post("/get-products-by-category", (request, response) => {
      const { id } = request.body;
      const values = [id];
      const query = 'SELECT *, i.file_path as image FROM products p JOIN images i ON p.main_image = i.id JOIN product_categories pc ON pc.product_id = p.id WHERE pc.category_id = ?';
      con.query(query, values, (err, res) => {
         if(res) {
            response.send({
               result: res
            });
         }
         else {
            response.send({
               result: 0
            });
         }
      });
   });

   /* Get product gallery */
   router.post("/get-gallery", (request, response) => {
      const { id } = request.body;
      const values = [id];
      const query = 'SELECT * FROM images WHERE product_id = ?';
      con.query(query, values, (err, res) => {
         if(res) {
            response.send({
               result: res
            });
         }
         else {
            response.send({
               result: 0
            });
         }
      });
   });

   /* GET PRODUCTS BY CATEGORIES LIST */
   router.post("/get-products-by-categories", (request, response) => {

   });
});

module.exports = router;
