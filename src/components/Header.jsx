import React, { useState } from "react";
import hero from "../Assets/images/hero.png";
import ContactForm from "./ContactForm";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleShowForm = () => {
    setIsFormVisible(true);
    document.getElementById("header").classList.add("blur");
    document.body.classList.add("no-scroll");
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    document.getElementById("header").classList.remove("blur");
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <div id="header">
        <div className="container">
          <div className="row">
            <div className="home-col-1">
              <h3>Award Winning</h3>
              <h1>Digital Marketing Agency</h1>
              <p>
                Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
                lacus nec risus finibus feugiat et fermentum
              </p>
              <div className="buttons">
                <button
                  id="showFormBtn"
                  className="btn"
                  onClick={handleShowForm}
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="home-col-2">
              <img className="home-img" src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </div>
      {isFormVisible && <ContactForm handleCloseForm={handleCloseForm} />}
    </>
  );
}

export default Header;
