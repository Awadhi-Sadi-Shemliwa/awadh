import React, { useState } from "react";
import image1 from "../../assets/f1.jpg";
import { featuredProducts, smallImages } from "../../layouts/data";
import "./SProductMiddle.css";
import Newsletter from "../../layouts/newsletter/Newsletter";

const SProductMiddle = () => {
  const [mainImage, setMainImage] = useState(image1);

  const handleImageClick = (src) => {
    setMainImage(src);
  };

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={mainImage} alt="Shirt Image" width="100%" id="MainImg" />
          <div className="small-img-group">
            {smallImages.map((src, index) => (
              <div className="small-img-col" key={index}>
                <img src={src} alt={`Small Img ${index + 1}`} width="100%" className="small-img" onClick={() => handleImageClick(src)} />
              </div>
            ))}
          </div>
        </div>

        <div className="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>Men's Fashion T Shirt</h4>
          <h2>$139.00</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" defaultValue={1} />
          <button className="normal">Add to Cart</button>
          <h4 className="details">Product Details</h4>
          <span>
            Gildan Ultra Cotton T-Shirt, Made from a substantial 6 oz per sq yd fabric constructed from 100% cotton, Classic fit preshrunk jersey
            knit. Offers unmatched comfort with each wear, Featuring a taped neck and shoulders, and a seamless double-needle collar, Available in a
            range of colors
          </span>
        </div>
      </section>
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {featuredProducts.map((product) => (
            <div className="pro" key={product.id}>
              <img src={product.src} alt={product.name} />
              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.name}</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>{product.price}</h4>
              </div>
              <a href="#">
                <i className="fa-solid fa-cart-shopping cart"></i>
              </a>
            </div>
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default SProductMiddle;