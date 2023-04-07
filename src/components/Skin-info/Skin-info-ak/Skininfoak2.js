import React from 'react';
import "../Skin-info.css";
import img from "../../Skins-template/Images/img-ak-2.png";

function Skininfoak2() {
    return (
      <div>
        <div className='Skins-info-content-page'>
          <div className='Skin-info-content'>
            <div className='Skin-info-img'>
              <img src={img} className='img-skin-info' alt=" " />
            </div>
            <div className='Skin-info-text'>
              <div className='tittle-info'>
                <p>AK-47 | Fire Serpent</p>
              </div>
              <div className='text-info'>
                <p>Operation: Bravo Case</p>
                <p>Rarity: Red</p>
                <p>Popularity: Very famous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skininfoak2;