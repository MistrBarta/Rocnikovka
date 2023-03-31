import React from 'react';
import "./Log.css";

function Log() {
  let data="login";
  function notification() {
    data="Login Successful";
    alert(data)
  }

    return (
      <div>
        <div className="cover">
            <h1>Login</h1>
            <form className="contact-form" method="get">
            <input className='login-page' type="text" placeholder="Username" />
            <input className='login-page' type="password" placeholder="Password" />
            <input type="Submit" className="contact-form-btn" defaultValue="Send" />
            </form>
        </div>
      </div>
    );
  }
  
  export default Log;