import React from 'react';
import "./Sup.css";

function Sup() {
    return (
      <div>
          <div className="support-section">
            <div className="title-sup">
              <p>Contact Us</p>
            </div>
            <form className="contact-form" method="get">
              <input type="text" className="contact-form-text" placeholder="Enter your name"/>
              <input type="email" className="contact-form-text" placeholder="Enter your email"/>
              <textarea className="contact-form-text" placeholder="Your problem" defaultValue={""} />
              <input type="Submit" className="contact-form-btn" defaultValue="Send" />
            </form>
          </div>
      </div>
    );
  }
  
  export default Sup;