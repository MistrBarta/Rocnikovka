import React from 'react';
import "../Skin-info.css";
import img from "../../Skins-template/Images/img-awp-1.png";

function Skininfoawp1() {
    return (
      <div>
        <div className='Skins-info-content-page'>
          <div className='Skin-info-content'>
            <div className='Skin-info-img'>
              <img src={img} width="700px" height="396px" alt=" " />
            </div>
            <div className='Skin-info-text'>
              <div className='tittle-info'>
                <p>AWP | Medusa</p>
              </div>
              <div className='text-info'>
                <p>Collection: The Gods and Monsters</p>
                <p>Rarity: Red</p>
                <p>Popularity: Very famous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skininfoawp1;