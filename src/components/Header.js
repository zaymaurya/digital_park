import React from "react";
import hero from "../hero.png";

function Header() {
  return (
    <>
      <div id="header">
        <div id="part1">
          <h3>AWARD WINNING</h3>
          <h1>DIGITAL MARKETING AGENCY</h1>
          <h6>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            tempora ius eos nostrum optio iste laboriosam, quisquam ducimus, vel
            laudantium beatae omnis. Vel velit sint rerum minima illo!
          </h6>
        </div>
        <div id="part2">
          <img src={hero} alt="header" />
        </div>
      </div>
    </>
  );
}

export default Header;
