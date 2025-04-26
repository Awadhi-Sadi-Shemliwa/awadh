import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../../assets/logo.png";

const FooterColumn = ({ title, links }) => (
  <div className="col">
    <h4>{title}</h4>
    {links.map((link, index) => (
      <Link key={index} to={link.href}>
        {link.text}
      </Link>
    ))}
  </div>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-cols">
        <div className="col">
          <img src={logo} alt="Company Logo" className="logo" />
          <h4>Contact</h4>
          <p>
            <span className="bold">Address:</span> Mbweni
          </p>
          <p>
            <span className="bold">Phone:</span> 0783061555
          </p>
          <p>
            <span className="bold">Hours:</span> 10.00 - 18:00, Mon - Sat
          </p>
        </div>
        <FooterColumn
          title="About"
          links={[
            { text: "About Us", href: "#" },
            { text: "Delivery Information", href: "#" },
            { text: "Privacy Policy", href: "#" },
            { text: "Terms & Conditions", href: "#" },
            { text: "Contact Us", href: "#" },
          ]}
        />
        <FooterColumn
          title="My Account"
          links={[
            { text: "Sign In", href: "#" },
            { text: "View Cart", href: "#" },
            { text: "My Wishlist", href: "#" },
            { text: "Track My Order", href: "#" },
            { text: "Help", href: "#" },
          ]}
        />
        <div className="col follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f" aria-label="Facebook"></i>
            <i className="fab fa-twitter" aria-label="Twitter"></i>
            <i className="fab fa-instagram" aria-label="Instagram"></i>
            <i className="fab fa-youtube" aria-label="YouTube"></i>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {year} SHEHITA All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;