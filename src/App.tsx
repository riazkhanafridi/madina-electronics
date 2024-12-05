import { memo } from "react";
import Header from "./components/header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Home from "./pages/home";
import ProductDetail from "./pages/product/product-detail";

const App = memo(function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productName" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
});

export default App;
