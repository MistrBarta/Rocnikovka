import React from 'react';
import "../Skin-info.css";
import img from "../../Skins-template/Images/img-knife-2.png";

function Skininfoknife2() {
    return (
      <div>
        <div className='Skins-info-content-page'>
          <div className='Skin-info-content'>
            <div className='Skin-info-img'>
              <img src={img} className='img-skin-info' alt="" />
            </div>
            <div className='Skin-info-text'>
              <div className='tittle-info'>
                <p>Talon Knife | Doppler Sapphire</p>
              </div>
              <div className='text-info'>
                <p>Case: Prisma, Prisma 2</p>
                <p>Rarity: Red</p>
                <p>Popularity: Very popular</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skininfoknife2;