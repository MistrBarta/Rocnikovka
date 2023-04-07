import React from 'react';
import "../Skin-info.css";
import img from "../../Skins-template/Images/img-knife-3.png";

function Skininfoknife3() {
    return (
      <div>
        <div className='Skins-info-content-page'>
          <div className='Skin-info-content'>
            <div className='Skin-info-img'>
              <img src={img} className='img-skin-info' alt=" " />
            </div>
            <div className='Skin-info-text'>
              <div className='tittle-info'>
                <p>Butterfly Knife | Lore</p>
              </div>
              <div className='text-info'>
                <p>Case: Dreams & Nightmares, Riptide </p>
                <p>Rarity: Red</p>
                <p>Popularity: Popular</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skininfoknife3;