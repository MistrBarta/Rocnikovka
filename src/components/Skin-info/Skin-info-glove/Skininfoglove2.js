import React from 'react';
import "../Skin-info.css";
import img from "../../Skins-template/Images/img-glove-2.png";

function Skininfoglove2() {
    return (
      <div>
        <div className='Skins-info-content-page'>
          <div className='Skin-info-content'>
            <div className='Skin-info-img'>
              <img src={img} className='img-skin-info' alt=" " />
            </div>
            <div className='Skin-info-text'>
              <div className='tittle-info'>
                <p>Sport Gloves | Slingshot</p>
              </div>
              <div className='text-info'>
                <p>Case: Snakebite, Recoil, Broken Fang</p>
                <p>Rarity: Red</p>
                <p>Popularity: Not so popular</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skininfoglove2;