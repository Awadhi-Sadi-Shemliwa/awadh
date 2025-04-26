import React from "react";
import "./ContactMiddle.css";
import Newsletter from "../../layouts/newsletter/Newsletter";
import Preview from "../../layouts/preview/Preview";
import { peopleImages } from "../../layouts/data";
import bgImage from "../../assets/banner.png";

const peopleDetails = [
  {
    img: peopleImages[0],
    name: "John Doe",
    title: "Senior Marketing Manager",
    phone: "000 123 000 77 88",
    email: "contact@example.com",
  },
  {
    img: peopleImages[1],
    name: "William Smith",
    title: "Senior Marketing Manager",
    phone: "000 123 000 77 88",
    email: "contact@example.com",
  },
  {
    img: peopleImages[2],
    name: "Emma Stone",
    title: "Senior Marketing Manager",
    phone: "000 123 000 77 88",
    email: "contact@example.com",
  },
];

const ContactMiddle = () => {
  return (
    <>
      <Preview title="#letsTalk" des="Leave a message, we love to hear from you!" bg={bgImage} />
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <ul>
            <li>
              <i className="fas fa-map"></i>
              <p>Mbweni, Dar es Salaam</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>shehita@gmail.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>Mbweni, Dar es Salaam</p>
            </li>
            <li>
              <i className="far fa-clock"></i>
              <p>Monday to Saturday: 9:00am to 16:00pm</p>
            </li>
          </ul>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31708.451091118674!2d39.10398882650809!3d-6.577531394892273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cf7bc126bcb47%3A0x50e466528cb38d7a!2sMbweni!5e0!3m2!1sen!2stz!4v1721372398352!5m2!1sen!2stz"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" cols={30} rows={10} placeholder="Your Message"></textarea>
          <button className="normal">Submit</button>
        </form>
        <div className="people">
          {peopleDetails.map((person, index) => (
            <div key={index}>
              <img src={person.img} alt={person.name} />
              <p>
                <span>{person.name}</span> {person.title} <br />
                Phone: {person.phone} <br />
                Email: {person.email}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default ContactMiddle;