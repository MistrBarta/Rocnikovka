import React from 'react';
import "../Skin-info.css";
import img from "../../Skins-template/Images/img-ak-3.png";

function Skininfoak3() {
    return (
      <div>
        <div className='Skins-info-content-page'>
          <div className='Skin-info-content'>
            <div className='Skin-info-img'>
              <img src={img} className='img-skin-info' alt=" " />
            </div>
            <div className='Skin-info-text'>
              <div className='tittle-info'>
                <p>AK-47 | Asiimov</p>
              </div>
              <div className='text-info'>
                <p>Case: Danger Zone</p>
                <p>Rarity: Red</p>
                <p>Popularity: Not so popular</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skininfoak3;