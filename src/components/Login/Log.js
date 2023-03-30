import React from 'react';
import "./Log.css";

function Log() {
    return (
      <div>
        <div className="cover">
            <h1>Login</h1>
            <input className='login-page' type="text" placeholder="Username" />
            <input className='login-page' type="password" placeholder="Password" />
            <input type="Submit" className="contact-form-btn" defaultValue="Send" />
        </div>
      </div>
    );
  }
  
  export default Log;