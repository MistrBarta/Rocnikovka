import React from 'react';
import "./Content.css";

function Content() {
    return (
      <div className='content-page'>
        <div className='content-div'>
          <div className='tittle'>
            <p>About prices</p>
          </div>
          <div className='content-text'>
            <div className='br-content'>
              <p>My website work on actual prices from BUFF and all Float website.</p>
              <p>Stickers are also taken into account in the prices, it count 75% of their actual value.</p>
            </div>
            <div className='br-content2'>
              <p>You can check price of all skins, their true value. </p>
              <p>You can not buy or sell skins here</p>
              </div>
            <p>If you log in, web site will show you more information</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Content;