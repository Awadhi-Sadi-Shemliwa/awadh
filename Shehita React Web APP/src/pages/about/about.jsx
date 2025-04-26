import React from "react";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import "./about.css";
import Newsletter from "../../layouts/newsletter/Newsletter";
import Preview from "../../layouts/preview/Preview";
import bgImage from "../../assets/banner.png";
import aboutImage from "../../assets/a6.jpg";
import { featureImages } from "../../layouts/data";

const About = () => {
  return (
    <>
      <Header />
      <Preview title="#KnowUs" des="Lorem ipsum dolor sit amet, consectetur" bg={bgImage} />
      <section id="about-head" className="section-p1">
        <img src={aboutImage} alt="About Image" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae accusamus deserunt iusto voluptas sunt neque rerum. Hic eos
            repellat ab sit. Expedita nobis placeat deleniti atque tenetur ipsa dolore?
          </p>
          <abbr title="">Create stunning images with as much or as little control as you liek thanks to a choice of Basic and Creative modes.</abbr>
        </div>
      </section>
      <section id="feature" className="section-p1">
        {featureImages.map((feature, index) => (
          <div className="fe-box" key={index}>
            <img src={feature.img} alt={`Feature ${index + 1}`} />
            <h6>{feature.text}</h6>
          </div>
        ))}
      </section>
      <Newsletter />
      <Footer />
    </>
  );
};

export default About;