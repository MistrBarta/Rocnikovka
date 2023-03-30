import React from 'react';
import "./Content1.css";
import img1 from "./images/image_1.png";
import img2 from "./images/image_2.png";
import img3 from "./images/image_3.png";
import img4 from "./images/image_4.png";

function Content1() {
    return (
      <div className='page-content'>
        <div className='text-content'>
          <div className='text'>
            <h2>Information</h2>
            <p>You can check out some of the most expensive skins</p>
          </div>
        </div>
          <div className='img-content1'>
            <div className='img'>
              <img src={img1} width="400px" height="200px" alt=''/>
            </div>
            <div className='text-img'>
              <p>AWP | Dragon Lore</p>
              <p>Price: 19 094.45€ </p>
            </div>
          </div>

          <div className='img-content2'>
            <div className='img-skin'>
              <img src={img2} width="400px" height="200px" alt=''/>
            </div>
            <div className='text-img'>
              <p>M4A4 (StatTrak™) | Howl</p>
              <p>Price:  18 518.12€</p>
            </div>
          </div>

          <div className='img-content3'>
            <div className='img'>
              <img src={img3} width="400px" height="200px" alt=''/>
            </div>
            <div className='text-img'>
              <p>Butterfly Knife | Gamma Doppler</p>
              <p>Price:  17 544.20€</p>
            </div>
          </div>

          <div className='img-content4'>
            <div className='img'>
              <img src={img4} width="400px" height="200px" alt=''/>
            </div>
            <div className='text-img'>
              <p>Talon (StatTrak™) | Doppler</p>
              <p>Price:  15 349.11€</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Content1;