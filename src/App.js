import React from "react";
import "./App.css";
import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BlogDetail from "./pages/BlogDetail";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

function App() {
  return (
<>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products/>}/>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
