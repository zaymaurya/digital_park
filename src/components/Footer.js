import React from "react";
import "../style.css";
import brand1 from "../Assets/brands/brands1.jpg";
import brand2 from "../Assets/brands/brands2.jpeg";
import brand3 from "../Assets/brands/brands3.jpeg";
import brand4 from "../Assets/brands/brands4.jpeg";
import brand5 from "../Assets/brands/brands5.jpeg";
import brand6 from "../Assets/brands/brands6.jpeg";

function Footer() {
  return (
    <>
      <div class="container-fluid p-0">
        <ul class="footer">
          <li class="w-max">
            <img src={brand1} alt="brand1" />
          </li>
          <li class="w-max">
            <img src={brand2} alt="brand2" />
          </li>
          <li class="w-max">
            <img src={brand3} alt="brand3" />
          </li>
          <li class="w-max">
            <img src={brand4} alt="brand4" />
          </li>
          <li class="w-max">
            <img src={brand5} alt="brand5" />
          </li>
          <li class="w-max">
            <img src={brand6} alt="brand6" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
