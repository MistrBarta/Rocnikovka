import React from 'react';
import "./Hero.css";

function Hero() {
    return (
        <div className="hero-content">
            {/*Background img*/}
            <div className="hero-content-text">
                <div className="title">
                    <h1>MARKET PLACE</h1>
                </div>
                <div className="title-content">
                    <p>One of the CS:GO skins trading sites.</p>
                    <p>You can find here the prices of skins from CS:GO market.</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Hero;