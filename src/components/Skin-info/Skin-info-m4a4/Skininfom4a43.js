import React from 'react';
import "../Skin-info.css";
import img from "../../Skins-template/Images/img-m4-3.png";

function Skininfom4a43() {
    return (
      <div>
        <div className='Skins-info-content-page'>
          <div className='Skin-info-content'>
            <div className='Skin-info-img'>
              <img src={img} className='img-skin-info' alt=" " />
            </div>
            <div className='Skin-info-text'>
              <div className='tittle-info'>
                <p>M4A4 | The Emperor</p>
              </div>
              <div className='text-info'>
                <p>Case: Prisma</p>
                <p>Rarity: Red</p>
                <p>Popularity: Not so popular</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skininfom4a43;