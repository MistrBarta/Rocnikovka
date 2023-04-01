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
        <Knife />
        <Glove />
        <AWP />
        <AK />
        <M4 />
      </div>
    );
  }
  
  export default Skin;