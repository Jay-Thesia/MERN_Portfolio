import React from "react";
import "./Contact.css";
import contact from "../../images/ContactBanner.gif";

const Contact = () => {
  return (
    <div className="main-container" id="Contact">
      <div className="contactForm">
        <h1 className="title">Contact</h1>

        <div className="contactFrom-center">
          <div className="contact_form">
            <form>
              <p><big> <b>Message</b></big></p>
              <label htmlFor="name">Name: </label>
              <input type="text" placeholder="Enter your name" required />

              <label htmlFor="email">Email: </label>
              <input type="email" placeholder="Enter your mail ID" required />

              <label htmlFor="message">Message: </label>
              <textarea
                name="message"
                id=""
                cols="20"
                rows="7"
                placeholder="Enter your message"
              ></textarea>

              <div className="sent-btn">
                <button type="submit"><i className="fa fa-paper-plane"></i></button>
              </div>
            </form>
          </div>

          {/* contact-inf */}

          <div className="contact-info">
            <h2>Send Me message</h2>
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
