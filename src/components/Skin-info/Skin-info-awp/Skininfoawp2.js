import React from 'react';
import "../Skin-info.css";
import img from "../../Skins-template/Images/img-awp-2.png";

function Skininfoawp2() {
    return (
      <div>
        <div className='Skins-info-content-page'>
          <div className='Skin-info-content'>
            <div className='Skin-info-img'>
              <img src={img} width="700px" height="396px" alt=" " />
            </div>
            <div className='Skin-info-text'>
              <div className='tittle-info'>
                <p>AWP | Dragon Lore</p>
              </div>
              <div className='text-info'>
                <p>Collection: The Cobblestone </p>
                <p>Rarity: Red</p>
                <p>Popularity: Very famous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skininfoawp2;