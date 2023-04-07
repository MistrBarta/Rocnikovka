import React from 'react';
import "../Skin-info.css";
import img from "../../Skins-template/Images/img-awp-3.png";

function Skininfoawp3() {
    return (
      <div>
        <div className='Skins-info-content-page'>
          <div className='Skin-info-content'>
            <div className='Skin-info-img'>
              <img src={img} className='img-skin-info' alt=" " />
            </div>
            <div className='Skin-info-text'>
              <div className='tittle-info'>
                <p>AWP | The Prince</p>
              </div>
              <div className='text-info'>
                <p>Collection: The Canals</p>
                <p>Rarity: Red</p>
                <p>Popularity: Famous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skininfoawp3;