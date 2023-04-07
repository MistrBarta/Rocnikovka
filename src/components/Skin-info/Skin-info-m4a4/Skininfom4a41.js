import React from 'react';
import "../Skin-info.css";
import img from "../../Skins-template/Images/img-m4-1.png";

function Skininfom4a41() {
    return (
      <div>
        <div className='Skins-info-content-page'>
          <div className='Skin-info-content'>
            <div className='Skin-info-img'>
              <img src={img} width="700px" height="396px" alt=" " />
            </div>
            <div className='Skin-info-text'>
              <div className='tittle-info'>
                <p>M4A4 | Poseidon</p>
              </div>
              <div className='text-info'>
                <p>Collection: The Gods and Monsters</p>
                <p>Rarity: Pink</p>
                <p>Popularity: Not so popular</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skininfom4a41;