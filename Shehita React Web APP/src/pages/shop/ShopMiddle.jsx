import React from "react";
import Newsletter from "../../layouts/newsletter/Newsletter.jsx";
import bgImage from "../../assets/b1.jpg";
import "./ShopMiddle.css";
import { Link } from "react-router-dom";
import { products } from "../../layouts/data.js";
import Preview from "../../layouts/preview/Preview.jsx";

const Product = ({ id, src, brand, name, price }) => (
  <Link to={`/shop/${id}`}>
    <div className="pro">
      <img src={src} alt={name} />
      <div className="des">
        <span>{brand}</span>
        <h5>{name}</h5>
        <div className="star">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <h4>{price}</h4>
      </div>
      <button>
        <i className="fa-solid fa-cart-shopping cart"></i>
      </button>
    </div>
  </Link>
);

const ShopMiddle = () => {
  return (
    <>
      <Preview title="#stayhome" des="Save more on coupons & up to 70% off!" bg={bgImage} />
      <section id="product1" className="section-p1">
        <div className="pro-container">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
      <section id="pagination">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </section>
      <Newsletter />
    </>
  );
};

export default ShopMiddle;