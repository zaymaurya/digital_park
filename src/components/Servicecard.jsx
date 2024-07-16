import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import arrow from "../Assets/icons/arrow.svg";
import icon from "../Assets/icons/icon.svg";

function Servicecard({ imgSrc, imgAlt, title }) {
  return (
    <div className="card">
      <div className="img">
        <img src={imgSrc} alt={imgAlt} draggable="false" />
      </div>
      <div className="layer">
        <img src={icon} alt="icon" />
        <h3>{title}</h3>
        <p>
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
          Pellentesque
        </p>
        <Link className="btn" target="_blank" to="https://www.fylehq.com/">
          Read More <img className="arrow" src={arrow} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Servicecard;
