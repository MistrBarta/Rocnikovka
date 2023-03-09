import React from 'react';
import "./Styles/Login.css";

function Login() {
    return (
      <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div className="login-btn">Login</div>
        </div>
    );
  }
  
  export default Login;