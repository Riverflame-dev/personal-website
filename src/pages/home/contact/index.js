import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";

//import { Alert } from "react-bootstrap";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";

const meta = {
  title: "Yilei Li",
  description: "I’m Yilei Li..."
};

const contactConfig = {
  YOUR_EMAIL: "the.yilei.li@gmail.com",
  YOUR_FONE: "(260)755-8369",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_yileili",
  YOUR_TEMPLATE_ID: "template_z2wkcj5",
  YOUR_USER_ID: "xRdGmnzpc8q-P3SnH"
};

export const Contact = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! Thankyou for your messege",
            variant: "success",
            show: true
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send! ${error.text}`,
            variant: "warning",
            show: true
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <div className="row">
        <h1>Contact Me</h1>
      </div>
      <div className="row">
        <div className="col-alert">
          <Collapse in={formData.show}>
            <Alert
              //show={formData.show}
              severity={formData.variant}
              className={`co_alert ${formData.show ? "d-block" : "d-none"}`}
              onClose={() => setFormdata({ show: false })}
            >
              {formData.alertmessage}
            </Alert>
          </Collapse>
          <br />
        </div>
        <div className="col-text">
          <h3>Get in touch</h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p>{contactConfig.description}</p>
        </div>
        <div className="col-form">
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="row">
              <div className="col-form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name || ""}
                  type="text"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email || ""}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <textarea
              className="form-control rounded-0"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <br />
            <br />
            <div className="row">
              <div className="col-form-group">
                <button className="btn ac_btn" type="submit">
                  {formData.loading ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </div>
  );
};

