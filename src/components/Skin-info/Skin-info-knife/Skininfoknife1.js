import React from 'react';
import "../Skin-info.css";
import img from "../../Skins-template/Images/img-knife-1.png";

function Skininfoknife1() {
    return (
      <div>
        <div className='Skins-info-content-page'>
          <div className='Skin-info-content'>
            <div className='Skin-info-img'>
              <img src={img} width="700px" height="396px" alt=" " />
            </div>
            <div className='Skin-info-text'>
              <div className='tittle-info'>
                <p>Butterfly Knife | Doppler Ruby</p>
              </div>
              <div className='text-info'>
                <p>Case: Spectrum, Spectrum 2 </p>
                <p>Rarity: Red</p>
                <p>Popularity: Very Famous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skininfoknife1;