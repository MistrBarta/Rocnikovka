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
            <form className="contact-form-login" method="get">
            <input className='login-page' type="text" placeholder="Username" />
            <input className='login-page' type="password" placeholder="Password" />
            <input type="Submit" onClick={notification} className="contact-form-btn-login" defaultValue="Send" />
            </form>
        </div>
      </div>
    );
  }
  
  export default Log;