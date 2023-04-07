import React from 'react';
import "./Skins-page.css";
import Knife from '../Skins-template/knife';
import AK from '../Skins-template/ak';
import Glove from '../Skins-template/glove';
import AWP from '../Skins-template/awp';
import M4 from '../Skins-template/m4';

function Skin() {
    return (
      <div>
        <div className='tittle-skins-page'>
          <p>If you click on any image of the skin, more detailed information will open</p>
        </div>
        <Knife />
        <Glove />
        <AWP />
        <M4 />
        <AK />
      </div>
    );
  }
  
  export default Skin;