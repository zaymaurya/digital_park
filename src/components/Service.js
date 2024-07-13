import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import pic1 from "../Assets/images/1.png";
import pic2 from "../Assets/images/2.png";
import arrow from "../Assets/icons/arrow.svg";

function Service() {
  return (
    <>
      <div className="service">
        <div className="service-container">
          <div className="row">
            <div className="service-col-1">
              <h3>What we do</h3>
              <h1>Service Provide for You</h1>
            </div>
            <div className="service-col-2">
              <p>
                Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
                lacus nec risus finibus feugiat et fermentum
              </p>
            </div>
          </div>
          <div className="work">
            <div className="slider">
              <div className="card">
                <div className="img">
                  <img src={pic1} alt="pic1" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={pic2} alt="pic2" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={pic1} alt="pic1" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={pic1} alt="pic1" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />{" "}
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={pic2} alt="pic2" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={pic1} alt="pic1" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={pic2} alt="pic2" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={pic1} alt="pic1" draggable="false" />
                </div>
                <div className="layer">
                  {" "}
                  /
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={pic2} alt="pic2" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={pic1} alt="pic1" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={pic2} alt="pic2" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={pic1} alt="pic1" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />
                  </Link>
                </div>
              </div>

              <div className="card">
                <div className="img">
                  <img src={pic1} alt="pic1" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />{" "}
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={pic2} alt="pic2" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src={pic1} alt="pic1" draggable="false" />
                </div>
                <div className="layer">
                  <img src="Assets/icons/icon.svg" alt="" />
                  <h3>Web Development</h3>
                  <p>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                    Pellentesque
                  </p>
                  <Link
                    className="btn"
                    target="_blank"
                    to="https://www.fylehq.com/"
                  >
                    Read More <img className="arrow" src={arrow} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="dot-container">
              <div className="dot black-dot"></div>
              <div className="dot red-dot"></div>
              <div className="dot black-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
