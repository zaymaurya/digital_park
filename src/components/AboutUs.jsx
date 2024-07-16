import React, { useState, useEffect } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import icon1 from "../Assets/icons/1.svg";
import icon2 from "../Assets/icons/2.svg";
import icon3 from "../Assets/icons/3.svg";
import icon4 from "../Assets/icons/4.svg";
import japan1 from "../Assets/images/japan1.jpg";
import japan2 from "../Assets/images/japan2.jpg";
import japan3 from "../Assets/images/japan3.png";

const images = [japan1, japan2, japan3];

function AboutUs() {
  const [mainImage, setMainImage] = useState(japan1);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeImage = (index) => {
    setMainImage(images[index]);
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setMainImage(images[nextIndex]);
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div id="about">
        <div className="d-flex flex-column feature_section px-md-5 py-3 py-md-5 about">
          <div className="heading text-center">
            <span className="fw-bold text-uppercase">Why Choose Us</span>
            <h1 className="mt-0 fw-bold text-uppercase">Why we are Best</h1>
          </div>
          <div className="row mar-1 mt-5" id="aboutUs">
            <div className="about-col-1 col col-12 col-md-6 col-lg-4 col-xl-3 d-flex flex-column py-3">
              <img src={icon1} alt="icon1" />
              <h3 className="p-0 m-0 d-block w-100 mt-1 px-2">
                Clarified Vision &amp; Target
              </h3>
              <p className="mt-2 px-2">
                Lorem ipsum dolor sit amet, consectetur sadipisicing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="about-col-2 col col-12 col-md-6 col-lg-4 col-xl-3 d-flex flex-column py-3">
              <img src={icon2} alt="icon2" />
              <h3 className="p-0 m-0 d-block w-100 mt-1 px-2">
                High Performance
              </h3>
              <p className="mt-2 px-2">
                Lorem ipsum dolor sit amet, consectetur sadipisicing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="about-col-3 col col-12 col-md-6 col-lg-4 col-xl-3 d-flex flex-column py-3">
              <img src={icon3} alt="icon3" />
              <h3 className="p-0 m-0 d-block w-100 mt-1 px-2">
                Maintain Security
              </h3>
              <p className="mt-2 px-2">
                Lorem ipsum dolor sit amet, consectetur sadipisicing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="about-col-4 col col-12 col-md-6 col-lg-4 col-xl-3 d-flex flex-column py-3">
              <img src={icon4} alt="icon4" />
              <h3 className="p-0 m-0 d-block w-100 mt-1 px-2">
                Better Strategy &amp; Quality
              </h3>
              <p className="mt-2 px-2">
                Lorem ipsum dolor sit amet, consectetur sadipisicing elitr, sed
                diam nonumy.
              </p>
            </div>
          </div>
          <div className="project d-flex flex-column py-5 py-md-5 project_section">
            <div className="project-heading">
              <span className="fw-bold text-uppercase">Our Project</span>
              <h1 className="mt-0 fw-bold text-uppercase">Why we are best</h1>
            </div>
            <div className="row mt-2" id="aboutUs2">
              <div className="project-col-1 col col-12 col-lg-8">
                <div className="photos">
                  <img
                    className="project_active_img"
                    id="mainImage"
                    src={mainImage}
                    alt="project"
                  />
                </div>
              </div>
              <div className="project-col-2 project_changing_btns col col-12 col-lg-4">
                <div
                  className={`about-photos ${
                    activeIndex === 1 ? "selected" : ""
                  } grey d-flex flex-column`}
                  onClick={() => changeImage(1)}
                >
                  <h3 className="project_active_text">
                    Genderless Kei - Japan's Hot
                  </h3>
                  <p className="mt-2 project_active_text">
                    Set to launch on the manufacturer's new A330neo aircraft in
                    2017, it's offering lots of
                  </p>
                </div>
                <div
                  className={`about-photos ${
                    activeIndex === 2 ? "selected" : ""
                  } grey d-flex flex-column`}
                  onClick={() => changeImage(2)}
                >
                  <h3 className="project_deactive_text">
                    Better Strategy &amp; Quality
                  </h3>
                  <p className="mt-2 project_deactive_text">
                    Set to launch on the manufacturer's new A330neo aircraft in
                    2017, it's offering lots of
                  </p>
                </div>
                <div
                  className={`about-photos ${
                    activeIndex === 0 ? "selected" : ""
                  } grey d-flex flex-column`}
                  onClick={() => changeImage(0)}
                >
                  <h3 className="project_deactive_text">
                    Genderless Kei - Japan's Hot
                  </h3>
                  <p className="mt-2 project_deactive_text">
                    Set to launch on the manufacturer's new A330neo aircraft in
                    2017, it's offering lots of
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
