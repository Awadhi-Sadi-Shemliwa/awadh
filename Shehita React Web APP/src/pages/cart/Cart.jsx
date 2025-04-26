import React, { useState } from "react";
import "./Cart.css";
import Header from "../../layouts/header/Header";
import Preview from "../../layouts/preview/Preview";
import Footer from "../../layouts/footer/Footer";
import Newsletter from "../../layouts/newsletter/Newsletter";
import bgImage from "../../assets/banner.png";
import image1 from "../../assets/f1.jpg";
import image2 from "../../assets/f2.jpg";
import image3 from "../../assets/f3.jpg";
import CartItem from "./CartItem";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, image: image1, productName: "Cartoon Astronaut T-Shirts", price: 118.19, quantity: 1 },
    { id: 2, image: image2, productName: "Cartoon Astronaut T-Shirts", price: 118.19, quantity: 1 },
    { id: 3, image: image3, productName: "Cartoon Astronaut T-Shirts", price: 118.19, quantity: 1 },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item)));
  };

  const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <Preview title="#cart" des="Add your coupon code & SAVE up to 70%!" bg={bgImage} />
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                image={item.image}
                productName={item.productName}
                price={item.price}
                quantity={item.quantity}
                onRemove={() => handleRemoveItem(item.id)}
                onQuantityChange={(quantity) => handleQuantityChange(item.id, quantity)}
              />
            ))}
          </tbody>
        </table>
      </section>
      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>

        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>${cartSubtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>${cartSubtotal.toFixed(2)}</strong>
              </td>
            </tr>
          </table>
          <button className="normal">Proceed to Checkout</button>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Cart;
