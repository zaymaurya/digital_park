import React from "react";
import heart from "../Assets/icons/heart (2).svg";
import clock from "../Assets/icons/clock (3).svg";
import path2 from "../Assets/icons/Path 4402.svg";
import path6 from "../Assets/icons/Path 4406.svg";
import CountUp from "react-countup";
import "../style.css";

function Numbers() {
  return (
    <div id="numbers">
      <div className="container">
        <div className="heading performance_section d-flex flex-column py-5 py-md-5">
          <span className="text-center fw-bold text-uppercase">
            Experts Growth
          </span>
          <h1 className="mt-0 text-center fw-bold text-uppercase">
            Our Company Growth
          </h1>
        </div>
        <div className="row mar-1 mt-4">
          <div className="numbers">
            <img src={heart} alt="heart" />
            <CountUp end={199} duration={2} />
            <p>Satisfied Customers</p>
          </div>

          <div className="numbers">
            <img src={clock} alt="clock" />
            <CountUp end={1591} duration={2} />
            <p>Days Of Operation</p>
          </div>

          <div className="numbers">
            <img src={path2} alt="path2" />
            <CountUp end={283} duration={2} />
            <p>Complete Project</p>
          </div>

          <div className="numbers">
            <img src={path6} alt="path6" />
            <CountUp end={75} duration={2} />
            <p>Win Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
