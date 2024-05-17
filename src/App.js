import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";

import NavbarComp from "./components/Header/NavbarComp";
import AllProducts from "./pages/AllProducts";
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";
import DocPage from "./pages/DocPage";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/doc" element={<DocPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
