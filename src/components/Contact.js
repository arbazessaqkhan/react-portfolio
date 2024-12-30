import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";
import socialImg from "./../assets/social-media.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5bty7bi",
        "template_f7x1gtt",
        formData,
        "EkbBX9iDWTN6Jp35o"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Email Sent",
          text: "Your email was sent successfully!",
          confirmButtonColor: "#007bff",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Email Failed",
          text: `Failed to send email: ${error.text}`,
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div className="container contact-container">
      <h2 className="contact-header">Let's Connect</h2>

      <div className="row">
        {/* Image Section */}
        <div className="col-md-6 col-12 text-center">
          <img
            src={socialImg}
            alt="social-media"
            className="img-fluid"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        {/* Form Section */}
        <div className="col-md-6 col-12 mt-4 mt-md-0">
          <Form onSubmit={handleSubmit} className="contact-form">
            {/* Name Input */}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Please enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Email Input */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Please enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Message Textarea */}
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                placeholder="Please enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" variant="primary" className="submit-button">
              Send Email
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
