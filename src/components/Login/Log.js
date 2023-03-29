import React from 'react';
import "./Log.css";

function Log() {
    return (
      <div>
        <div className="cover">
            <h1>Login</h1>
            <input className='login-page' type="text" placeholder="Username" />
            <input className='login-page' type="password" placeholder="Password" />
            <div className="login-btn">Login</div>
        </div>
      </div>
    );
  }
  
  export default Log;