import React from 'react';
import "./Sup.css";

function Sup() {
    return (
      <div>
          <div className="support-section">
            <div className="title-sup">
              <p>Contact Us</p>
            </div>
            <form className="contact-form" action="index.html" method="post">
              <input type="text" className="contact-form-text" placeholder="Enter your name"/>
              <input type="email" className="contact-form-text" placeholder="Enter your email"/>
              <textarea className="contact-form-text" placeholder="Your problem" defaultValue={""} />
              <input type="submit" className="contact-form-btn" defaultValue="Send" />
            </form>
          </div>
      </div>
    );
  }
  
  export default Sup;