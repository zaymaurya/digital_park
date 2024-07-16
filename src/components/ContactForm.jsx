import React, { useState } from "react";
import axios from "axios";
import "../style.css";

function ContactForm({ handleCloseForm }) {
  const [formValues, setFormValues] = useState({
    workEmail: "",
    firstName: "",
    lastName: "",
    termsCheckbox: false,
  });

  const [inputFocus, setInputFocus] = useState({
    workEmail: false,
    firstName: false,
    lastName: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormValues({
      ...formValues,
      [name]: newValue,
    });
  };

  const handleInputFocus = (event) => {
    const { name } = event.target;
    setInputFocus({
      ...inputFocus,
      [name]: true,
    });
  };

  const handleInputBlur = (event) => {
    const { name, value } = event.target;
    if (!value.trim()) {
      setInputFocus({
        ...inputFocus,
        [name]: false,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await axios.post(
        "https://getform.io/f/apjmpnza",
        formData
      );
      if (response.status === 200) {
        alert("Form submitted successfully!");
        handleCloseForm();
        form.reset();
        setFormValues({
          workEmail: "",
          firstName: "",
          lastName: "",
          termsCheckbox: false,
        });
        setInputFocus({
          workEmail: false,
          firstName: false,
          lastName: false,
        });
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      id="contactFormContainer"
      className="hidden"
      style={{
        display: "block",
        opacity: 1,
        transform: "translate(-50%, -50%) scale(1)",
      }}
    >
      <form
        action="https://getform.io/f/apjmpnza"
        method="POST"
        id="contactForm"
        onSubmit={handleSubmit}
      >
        <h2 id="form-h2">
          Talk to us{" "}
          <i
            className="fa-solid fa-xmark"
            id="closeFormBtn"
            onClick={handleCloseForm}
          ></i>
          <span
            style={{
              position: "absolute",
              fontSize: "28px",
              right: "32px",
              top: "25px",
              cursor: "pointer",
            }}
            onClick={handleCloseForm}
          >
            x
          </span>
        </h2>
        <div className="form-container">
          <div className="form-group">
            <input
              type="email"
              id="workEmail"
              name="workEmail"
              value={formValues.workEmail}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              required
            />
            <label
              htmlFor="workEmail"
              className={
                inputFocus.workEmail || formValues.workEmail ? "filled" : ""
              }
            >
              Work email*
            </label>
          </div>

          <div className="flex " id="marginBalance">
            <div className="form-group">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
              <label
                htmlFor="firstName"
                className={
                  inputFocus.firstName || formValues.firstName ? "filled" : ""
                }
              >
                First name*
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
              <label
                htmlFor="lastName"
                className={
                  inputFocus.lastName || formValues.lastName ? "filled" : ""
                }
              >
                Last name*
              </label>
            </div>
          </div>
        </div>
        <div className="checkbox-container flex" id="marginBalance">
          <input
            className="col-1"
            type="checkbox"
            id="termsCheckbox"
            name="termsCheckbox"
            checked={formValues.termsCheckbox}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            required
          />
          <label id="terms" htmlFor="termsCheckbox">
            I agree to Fyle's terms and conditions, and provide consent to send
            me communication.
          </label>
        </div>
        <input
          type="hidden"
          name="_gotcha"
          style={{ display: "none !important" }}
        />

        <button type="submit">Contact Us</button>
      </form>
    </div>
  );
}

export default ContactForm;
