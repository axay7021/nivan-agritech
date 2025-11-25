// import "./App.css";
// import Navbar from "./component/navigation/navbar.js";
// import ImageSlider from "./component/slider/slider.js";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Banner from "./component/banner/banner.js";
// import Component from "./component/news/news.js";
// import ProductionFacilities from "./component/Product/ProductionFacilities.js";
// import CategorySelection from "./component/Product/CategorySelection.js";
// import Footer from "./component/footer/footer.js";
// import Numbers from "./component/achivment/achivment.js";
// import AboutUs from "./component/aboutUs/aboutUs.js";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navbar />
//         <ImageSlider />
//         <Banner />
//         <AboutUs />
//         <Component />
//         <ProductionFacilities />
//         <CategorySelection />
//         <Numbers />
//         <Footer />
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import AboutUs from "./component/aboutUs/aboutUs.js";
import Numbers from "./component/achivment/achivment.js";
import Banner from "./component/banner/banner.js";
import Footer from "./component/footer/footer.js";
import Navbar from "./component/navigation/navbar.js";
import CategorySelection from "./component/Product/CategorySelection.js";
import ProductGalleryPage from "./pages/ProductGalleryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductionFacilities from "./component/Product/ProductionFacilities.js";
import ImageSlider from "./component/slider/slider.js";
import ModernHero from "./component/hero/ModernHero.js";
import EnhancedHero from "./component/hero/EnhancedHero.js";

// const MainContent = () => {
//   const location = useLocation();

//   return (
//     <>
//       {/* Default homepage layout */}
//       {location.pathname === "/" && (
//         <>
//           <ImageSlider />
//           <Banner />
//           <AboutUs />
//           {/* <Component /> */}
//           <ProductionFacilities />
//           <ProductCarousel />
//           {/* <ContactUs /> */}
//           <CategorySelection />
//           <Numbers />
//         </>
//       )}

//       {/* Conditional rendering based on path */}
//       {location.pathname === "/about-us" && <AboutUs />}
//       {location.pathname === "/news" && <Component />}
//       {location.pathname === "/production-facilities" && (
//         <ProductionFacilities />
//       )}
//       {location.pathname === "/categories" && <CategorySelection />}
//       {location.pathname === "/achievements" && <Numbers />}
//     </>
//   );
// };

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div id="section-hero">
                    <EnhancedHero />
                  </div>
                  <div id="section-banner">
                    <Banner />
                  </div>
                  <div id="section-products-overview">
                    <AboutUs />
                  </div>
                  <div id="section-facilities">
                    <ProductionFacilities />
                  </div>
                  <div id="section-products">
                    <CategorySelection />
                  </div>
                  <div id="section-contact">
                    <Numbers />
                  </div>
                </>
              }
            />
            <Route path="/products" element={<ProductGalleryPage />} />
            <Route
              path="/products/:categoryKey"
              element={<ProductGalleryPage />}
            />
            <Route
              path="/product-details/:categoryKey"
              element={<ProductDetailPage />}
            />
          </Routes>
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
