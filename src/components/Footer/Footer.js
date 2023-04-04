import React from 'react';
import "./Footer.css";
import img1 from "./Image/facebook-logo.png";
import img2 from "./Image/instagram-logo.png";
import img3 from "./Image/steam-logo.png";
import img4 from "./Image/twitch-logo.png";

function Footer() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-center">
              <div className="site">
                {/*link for socialmedia*/}
                <a target="_blank" href="https://www.facebook.com/adam.barta.338/">
                  <img src={img1} width="20px" alt='' />
                </a>
                <a target="_blank" href="https://www.instagram.com/barta_adam_/">
                  <img src={img2} width="20px" alt='' />
                </a>
                <a target="_blank" href="https://steamcommunity.com/profiles/76561198377122431/">
                  <img src={img3} width="20px" alt='' />
                </a>
                <a target="_blank" href="https://www.twitch.tv/b4rt1k1">
                  <img src={img4} width="30px" alt='' />
                </a>
              </div>
            </div>
          </div>
          <div className="media">
            <p>You can check out my social media</p>
            <p>You can contact me there as well</p>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;