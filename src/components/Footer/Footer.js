import React from 'react';
import "./Footer.css";
import { FaFacebook, FaInstagram, FaSteam, FaTwitch } from "react-icons/fa";

function Footer() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-center">
              <div className="site">
                {/*link for socialmedia*/}
                <a target="blank" rel="noopener" href="https://www.facebook.com/adam.barta.338/">
                  <FaFacebook size="20px" color='red'/>
                </a>
                <a target="blank" rel="noopener" href="https://www.instagram.com/barta_adam_/">
                  <div className='social-media'>
                    <FaInstagram size="20px" color='red'/>
                  </div>
                </a>
                <a target="blank" rel="noopener" href="https://steamcommunity.com/profiles/76561198377122431/">
                  <div className='social-media'>
                    <FaSteam size="20px" color='red'/>
                  </div>
                </a>
                <a target="blank" rel="noopener" href="https://www.twitch.tv/b4rt1k1">
                  <div className='social-media'>
                    <FaTwitch size="20px" color='red'/>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="media">
            <p>You can check out our social media</p>
            <p>You can contact us there as well</p>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;