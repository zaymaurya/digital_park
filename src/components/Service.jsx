import React, { useState } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import pic1 from "../Assets/images/1.png";
import pic2 from "../Assets/images/2.png";
import pic3 from "../Assets/images/foodbag.jpg";
import Servicecard from "./Servicecard";

function Service() {
  const cardsData = [
    { imgSrc: pic1, imgAlt: "Pic 1", title: "Web Development" },
    { imgSrc: pic2, imgAlt: "Pic 2", title: "App Development" },
    { imgSrc: pic3, imgAlt: "Pic 3", title: "Graphic Design" },
    { imgSrc: pic1, imgAlt: "Pic 1", title: "SEO Services" },
    { imgSrc: pic2, imgAlt: "Pic 2", title: "Digital Marketing" },
    { imgSrc: pic3, imgAlt: "Pic 3", title: "Content Writing" },
    { imgSrc: pic1, imgAlt: "Pic 1", title: "UI/UX Design" },
    { imgSrc: pic2, imgAlt: "Pic 2", title: "Branding" },
    { imgSrc: pic3, imgAlt: "Pic 3", title: "Social Media Management" },
    { imgSrc: pic1, imgAlt: "Pic 1", title: "Web Hosting" },
    { imgSrc: pic2, imgAlt: "Pic 2", title: "IT Consulting" },
    { imgSrc: pic3, imgAlt: "Pic 3", title: "Software Development" },
    { imgSrc: pic1, imgAlt: "Pic 1", title: "Network Solutions" },
    { imgSrc: pic2, imgAlt: "Pic 2", title: "Cybersecurity" },
    { imgSrc: pic3, imgAlt: "Pic 3", title: "Cloud Services" },
    { imgSrc: pic1, imgAlt: "Pic 1", title: "Tech Support" },
  ];

  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    setActiveDot(index);
    const slider = document.querySelector(".slider");
    const cardWidth = slider.querySelector(".card").offsetWidth + 16; // 16px gap
    slider.scrollLeft = cardWidth * 4 * index;
  };

  return (
    <>
      <div className="service">
        <div className="container">
          <div className="row part1">
            <div className="col-md-5">
              <div className="service-col-1">
                <h3>What we do</h3>
                <h1>
                  Services Provide <br />
                  For You
                </h1>
              </div>
            </div>
            <div className="col-md-7">
              <div className="service-col-2">
                <p>
                  Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                  Pellentesque vitae ante at elit fringilla ac at purus. Morbi
                  sed lacus nec risus finibus feugiat et fermentum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="work part2">
          <div className="slider">
            {cardsData.map((card, index) => (
              <Servicecard
                key={index}
                imgSrc={card.imgSrc}
                imgAlt={card.imgAlt}
                title={card.title}
              />
            ))}
          </div>
          <div className="dot-container">
            {[0, 1, 2].map((dotIndex) => (
              <div
                key={dotIndex}
                className={`dot ${
                  activeDot === dotIndex ? "red-dot" : "black-dot"
                }`}
                onClick={() => handleDotClick(dotIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
