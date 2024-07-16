import React, { useEffect, useRef, useState } from "react";
import heart from "../Assets/icons/heart (2).svg";
import clock from "../Assets/icons/clock (3).svg";
import path2 from "../Assets/icons/Path 4402.svg";
import path6 from "../Assets/icons/Path 4406.svg";
import CountUp from "react-countup";
import "../style.css";

function Numbers() {
  const [isVisible, setIsVisible] = useState(false);
  const numbersRef = useRef(null);

  useEffect(() => {
    import("intersection-observer");

    const observerCallback = (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    };

    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const currentRef = numbersRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div id="numbers" ref={numbersRef}>
      <div className="container" id="numberGame">
        <div className="heading performance_section d-flex flex-column py-5 py-md-5">
          <span className="text-center fw-bold text-uppercase">
            Experts Growth
          </span>
          <h1 className="mt-0 text-center fw-bold text-uppercase">
            Our Company Growth
          </h1>
        </div>
        <div className="row mar-1 mt-3">
          <div className="numbers">
            <img src={heart} alt="heart" />
            <div className="countup-plus">
              {isVisible && <CountUp end={199} duration={2} />}
              <span id="plus">+</span>
            </div>
            <p>Satisfied Customers</p>
          </div>

          <div className="numbers">
            <img src={clock} alt="clock" />
            <div className="countup-plus">
              {isVisible && <CountUp end={1591} duration={2} />}
              <span id="plus">+</span>
            </div>
            <p>Days Of Operation</p>
          </div>

          <div className="numbers">
            <img src={path2} alt="path2" />
            <div className="countup-plus">
              {isVisible && <CountUp end={283} duration={2} />}
              <span id="plus">+</span>
            </div>
            <p>Complete Project</p>
          </div>

          <div className="numbers">
            <img src={path6} alt="path6" />
            <div className="countup-plus">
              {isVisible && <CountUp end={75} duration={2} />}
              <span id="plus">+</span>
            </div>
            <p>Win Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
