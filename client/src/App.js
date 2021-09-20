import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AOS from 'aos'
import "aos/dist/aos.css";

import './static/style/admin.css'
import './static/style/adminMobile.css'
import './static/style/style.css'
import './static/style/mobile.css'
import Homepage from "./pages/Homepage";
import Witraze from "./pages/Witraze";
import WitrazeSubpage from "./pages/WitrazeSubpage";
import Technologies from "./pages/Technologies";
import References from "./pages/References";
import ArtGallery from "./pages/ArtGallery";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Conservation from "./pages/Conservation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import ShippingAndPayment from "./pages/ShippingAndPayment";
import LoginPage from "./admin/pages/LoginPage";
import PanelPage from "./admin/pages/PanelPage";
import PanelProducts from "./admin/pages/PanelProducts";
import PanelOrders from "./admin/pages/PanelOrders";
import PanelCategories from "./admin/pages/PanelCategories";
import PanelPayment from "./admin/pages/PanelPayment";
import PanelShipping from "./admin/pages/PanelShipping";
import PanelSettings from "./admin/pages/PanelSettings";
import PanelCoupons from "./admin/pages/PanelCoupons";
import PanelImages from "./admin/pages/PanelImages";
import PanelOthers from "./admin/pages/PanelOthers";
import NewsletterPage from "./admin/pages/NewsletterPage";
import PanelStocks from "./admin/pages/PanelStocks";
import AddStockPage from "./admin/pages/AddStockPage";
import AddProductPage from "./admin/pages/AddProductPage";
import AddPostPage from "./admin/pages/AddPostPage";

function App() {
  /* Smooth scroll effect */
  const init = () => {
      new SmoothScroll(document,140,22);
  }

  function SmoothScroll(target, speed, smooth) {
      if (target === document)
          target = (document.scrollingElement
              || document.documentElement
              || document.body.parentNode
              || document.body) // cross browser support for document scrolling

      var moving = false
      var pos = target.scrollTop
      var frame = target === document.body
      && document.documentElement
          ? document.documentElement
          : target // safari is the new IE

      target.addEventListener('mousewheel', scrolled, { passive: false })
      target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

      function scrolled(e) {
          e.preventDefault(); // disable default scrolling

          var delta = normalizeWheelDelta(e)

          pos += -delta * speed
          pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

          if (!moving) update()
      }

      function normalizeWheelDelta(e){
          if(e.detail){
              if(e.wheelDelta)
                  return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
              else
                  return -e.detail/3 // Firefox
          }else
              return e.wheelDelta/120 // IE,Safari,Chrome
      }

      function update() {
          moving = true

          var delta = (pos - target.scrollTop) / smooth

          target.scrollTop += delta

          if (Math.abs(delta) > 0.5)
              requestFrame(update)
          else
              moving = false
      }

      var requestFrame = function() { // requestAnimationFrame cross browser
          return (
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function(func) {
                  window.setTimeout(func, 1000 / 50);
              }
          );
      }()
  }

  useEffect(() => {
      init();

      AOS.init({
          duration: 1500,
          delay: 200,
      });
  }, []);

  return <Router>
    {/* Website */}
    <Route exact path="/">
        <Homepage />
    </Route>
    <Route exact path="/witraze">
        <Witraze />
    </Route>
    <Route path="/witraze/witraze-sakralne">
        <WitrazeSubpage type="sakralne" />
    </Route>
    <Route path="/witraze/witraze-kameralne">
        <WitrazeSubpage type="kameralne" />
    </Route>
    <Route path="/technologie">
        <Technologies />
    </Route>
    <Route path="/referencje">
        <References />
    </Route>
    <Route path="/galeria-sztuki">
        <ArtGallery />
    </Route>
    <Route path="/konserwacja">
        <Conservation />
    </Route>
    <Route path="/o-nas">
        <AboutUs />
    </Route>
    <Route path="/kontakt">
        <Contact />
    </Route>
    <Route path="/polityka-prywatnosci">
        <PrivacyPolicy />
    </Route>
    <Route path="/regulamin">
        <TermsOfService />
    </Route>

    {/* Shop */}
    <Route path="/sklep">
        <Shop />
    </Route>
    <Route path="/produkt">
        <SingleProduct />
    </Route>
    <Route path="/koszyk">
        <Cart />
    </Route>
    <Route path="/podsumowanie-zamowienia">
        <ShippingAndPayment />
    </Route>

    {/* Admin panel */}
      <Route exact path='/admin'>
          <LoginPage />
      </Route>
      <Route exact path="/panel">
          <PanelPage />
      </Route>
      <Route path="/panel/produkty">
          <PanelProducts />
      </Route>
      <Route path="/panel/zamowienia">
          <PanelOrders />
      </Route>
      <Route path="/panel/kategorie">
          <PanelCategories />
      </Route>
      <Route path="/panel/platnosci">
          <PanelPayment />
      </Route>
      <Route path="/panel/wysylka">
          <PanelShipping />
      </Route>
      <Route path="/panel/ustawienia">
          <PanelSettings />
      </Route>
      <Route path="/panel/kupony">
          <PanelCoupons />
      </Route>
      <Route path="/panel/zdjecia">
          <PanelImages />
      </Route>
      <Route path="/panel/pozostale">
          <PanelOthers />
      </Route>
      <Route path="/panel/newsletter">
          <NewsletterPage />
      </Route>
      <Route path="/panel/stany-magazynowe">
          <PanelStocks />
      </Route>
      <Route path="/panel/dodaj-stan-magazynowy">
          <AddStockPage />
      </Route>

      {/* Add content pages */}
      <Route path="/panel/dodaj-produkt">
          <AddProductPage />
      </Route>
      <Route path="/panel/dodaj-wpis">
          <AddPostPage />
      </Route>
  </Router>
}

export default App;
