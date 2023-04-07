import React from 'react';
import "../Skins-page/Skins-page.css";
import img1 from "./Images/img-knife-1.png";
import img2 from "./Images/img-knife-2.png";
import img3 from "./Images/img-knife-3.png";
import {Link} from 'react-router-dom';

function Knife() {
    return (
      <div>
        {/*Line with skin name*/}
            <div className="page-line">
                <div className="line-1" />
                    <p className="line-skin-name">Knifes</p>
                <div className="line-2" />
            </div>
            {/*Section with skins*/}
            <div className="skins-a">
                {/*Box witch skin*/}
                <div className="skin-1">
                    <div className="img-skin">
                        <Link to="Skininfoknife1">
                            <img src={img1} width="400px" height="197px" alt="" />
                        </Link>
                    </div>
                    <div className="name-skin">
                        <p>Butterfly Knife | Doppler Ruby </p>
                    </div>
                    <div className="condition-skin">
                        <p>Factory New</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 15 209.21</p>
                    </div>
                </div>
                {/*Box witch skin*/}
                <div className="skin-2">
                    <div className="img-skin">
                        <Link to="Skininfoknife2">
                            <img src={img2} width="400px" height="197px" alt="" />
                        </Link>
                    </div>
                    <div className="name-skin">
                        <p>Talon Knife | Doppler Sapphire</p>
                    </div>
                    <div className="condition-skin">
                        <p>Factory New</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 8 108.03</p>
                    </div>
                </div>
                {/*Box witch skin*/}
                <div className="skin-3">
                    <div className="img-skin">
                        <Link to="Skininfoknife3">
                            <img src={img3} width="400px" height="197px" alt="" />
                        </Link>
                    </div>
                    <div className="name-skin">
                        <p>Butterfly Knife | Lore</p>
                    </div>
                    <div className="condition-skin">
                        <p>Minimal Wear</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 5 616.16</p>
                    </div>
                </div>
            </div>
            
      </div>
    );
  }
  
  export default Knife;