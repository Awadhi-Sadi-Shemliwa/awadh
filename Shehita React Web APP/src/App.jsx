import Home from "./pages/home/Home";
import About from "./pages/about/about";
import Shop from "./pages/shop/Shop";
import SProduct from "./pages/shop/SProduct";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<SProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;