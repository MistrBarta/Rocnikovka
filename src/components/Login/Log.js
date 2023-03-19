import React from 'react';
import "./Log.css";

function Log() {
    return (
      <div>
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div className="login-btn">Login</div>
        </div>
      </div>
    );
  }
  
  export default Log;