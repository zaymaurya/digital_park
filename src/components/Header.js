import React from "react";
import hero from "../Assets/images/hero.png";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {
  return (
    <>
      <div id="header">
        <div class="container">
          <div class="row">
            <div class="home-col-1">
              <h3>Award Winning</h3>
              <h1>Digital Marketing Agency</h1>
              <p>
                Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
                lacus nec risus finibus feugiat et fermentum
              </p>
              <div class="buttons">
                <button id="showFormBtn" class="btn">
                  Contact Us
                </button>
              </div>
            </div>
            <div class="home-col-2">
              <img class="home-img" src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
