import React from 'react';
import "../Skin-info.css";
import img from "../../Skins-template/Images/img-m4-2.png";

function Skininfom4a42() {
    return (
      <div>
        <div className='Skins-info-content-page'>
          <div className='Skin-info-content'>
            <div className='Skin-info-img'>
              <img src={img} className='img-skin-info' alt=" " />
            </div>
            <div className='Skin-info-text'>
              <div className='tittle-info'>
                <p>M4A4 | Asiimov</p>
              </div>
              <div className='text-info'>
                <p>Case: Winter Offensive Weapon, The Winter Offensive</p>
                <p>Rarity: Red</p>
                <p>Popularity: Not so famous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skininfom4a42;