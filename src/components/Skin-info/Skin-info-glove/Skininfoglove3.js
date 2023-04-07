import React from 'react';
import "../Skin-info.css";
import img from "../../Skins-template/Images/img-glove-3.png";

function Skininfoglove3() {
    return (
      <div>
        <div className='Skins-info-content-page'>
          <div className='Skin-info-content'>
            <div className='Skin-info-img'>
              <img src={img} width="700px" height="396px" alt=" " />
            </div>
            <div className='Skin-info-text'>
              <div className='tittle-info'>
                <p>Moto Gloves | Cool Mint</p>
              </div>
              <div className='text-info'>
                <p>Case: Glove, Hydra</p>
                <p>Rarity: Red</p>
                <p>Popularity: Not so famous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skininfoglove3;