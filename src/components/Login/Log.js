import React from 'react';
import "./Log.css";

function Log() {
  /*function for a notification*/
  let data="login";
  function notification() {
    data="Login Successful";
    alert(data)
  }

    return (
      <div>
        <div className="cover">
            <h1 className='tittle-login'>Login</h1>
            <form className="contact-form-login" method="get">
            <input className='login-page' type="text" placeholder="Username" />
            <input className='login-page' type="password" placeholder="Password" />
            {/*Submit and it will triggers a notification*/}
            <input type="Submit" onClick={notification} className="contact-form-btn" defaultValue="Send" />
            </form>
        </div>
      </div>
    );
  }
  
  export default Log;