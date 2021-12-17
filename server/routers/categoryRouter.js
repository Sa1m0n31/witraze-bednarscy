const express = require("express");
const router = express.Router();
const con = require("../databaseConnection");

con.connect(err => {
    /* ADD CATEGORY */
    router.post("/add", (request, response) => {
        let { name, nameEn, permalink, hidden } = request.body;
        hidden = hidden === "hidden";

        if(name === "") {
            response.redirect("https://witrazebednarscy.pl/panel/kategorie?added=0");
            return 0;
        }

        const values = [name, nameEn, permalink, hidden];
        const query = 'INSERT INTO categories VALUES (NULL, ?, ?, ?, ?)';

        con.query(query, values, (err, res) => {
            console.log(err);
            if(!err) response.redirect("https://witrazebednarscy.pl/panel/kategorie?added=1");
            else response.redirect("https://witrazebednarscy.pl/panel/kategorie?added=-1")
        });
    });

    /* REMOVE CATEGORY */
    router.post("/delete", (request, response) => {
       const { id } = request.body;
       const values = [id];
       const query = 'DELETE FROM categories WHERE id = ?';
       con.query(query, values, (err, res) => {
           let result = 0;
           if(err) {
               result = -1;
               if(err.errno === 1451) result = 0;
           }
           if(res) result = 1;
           response.send({
               result
           });
       });
    });

    /* GET CATEGORY BY ID */
    router.post("/get-category-by-id", (request, response) => {
        const { id } = request.body;
        const values = [id];
        const query = 'SELECT * FROM product_categories pc JOIN categories c ON pc.category_id = c.id WHERE c.id = ?';
        con.query(query, values, (err, res) => {
            if(res) {
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

    /* GET ALL CATEGORIES */
    router.get("/get-all", (request, response) => {
        con.query('SELECT * FROM categories', (err, res) => {
           response.send({
               result: res
           });
        });
    });

    /* GET CATEGORY BY NAME */
    router.post("/get-category-by-name", (request, response) => {
       const { name } = request.body;
       const values = [name];
       const query = 'SELECT * FROM categories WHERE name = ?';
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

    /* GET CATEGORY BY SLUG */
    router.post("/get-category-by-slug", (request, response) => {
        const { slug, parent } = request.body;
        let values;
        let query;
        if(parent) {
            values = [slug, parent];
            query = 'SELECT c1.name, c1.id, c1.permalink FROM categories c1 JOIN categories c2 ON c1.parent_id = c2.id WHERE c1.permalink = ? AND c2.permalink = ?';
        }
        else {
            values = [slug];
            query = 'SELECT * FROM categories WHERE permalink = ?';
        }
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

    /* GET CATEGORY DETAILS */
    router.post("/category-details", (request, response) => {
       const { id } = request.body;
       const query = 'SELECT * FROM categories WHERE id = ?';
       const values = [id];
       con.query(query, values, (err, res) => {
          if(res) {
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

    /* UPDATE CATEGORY */
    router.post("/update", (request, response) => {
    let { id, name, nameEn, permalink, hidden } = request.body;
    hidden = hidden === "hidden";
    id = parseInt(id);
    const values = [name, nameEn, permalink, hidden, id];
    const query = 'UPDATE categories SET name = ?, name_en = ?, permalink = ?, hidden = ? WHERE id = ?';

    con.query(query, values, (err, res) => {
        if(!err) response.redirect("https://witrazebednarscy.pl/panel/kategorie?added=2");
        else response.redirect("https://witrazebednarscy.pl/panel/kategorie?added=-1")
    });
    });
});

module.exports = router;
