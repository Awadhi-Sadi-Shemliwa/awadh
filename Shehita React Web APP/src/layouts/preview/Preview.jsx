import React from "react";
import "./Preview.css";

const Preview = ({ title, des, bg }) => {
  const previewStyle = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <section id="page-header" style={previewStyle}>
      <h2>{title}</h2>
      <p>{des}</p>
    </section>
  );
};

export default Preview;