import React from 'react';
import "../Skins-page/Skins-page.css";
import img1 from "./Images/img-ak-1.png";
import img2 from "./Images/img-ak-2.png";
import img3 from "./Images/img-ak-3.png";


function ak() {
    return (
      <div>
        {/*Line with skin name*/}
            <div className="page-line">
                <div className="line-1" />
                    <p className="line-skin-name">AK47</p>
                <div className="line-2" />
            </div>
            {/*Section with skins*/}
            <div className="skins-a">
                {/*Box witch skin*/}
                <div className="skin-1">
                    <div className="img-skin">
                        <img src={img3} width="400px" height="197px" alt="" />
                    </div>
                    <div className="name-skin">
                        <p>AK-47 | X-Ray</p>
                    </div>
                    <div className="condition-skin">
                        <p>Minimal Wear</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 1 561.25</p>
                    </div>
                </div>
                
                {/*Box witch skin*/}
                <div className="skin-2">
                    <div className="img-skin">
                        <img src={img2} width="400px" height="197px" alt="" />
                    </div>
                    <div className="name-skin">
                        <p>AK-47 | Fire Serpent</p>
                    </div>
                    <div className="condition-skin">
                        <p>Battle-Scarred</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 727.79</p>
                    </div>
                </div>
                {/*Box witch skin*/}
                <div className="skin-3">
                    <div className="img-skin">
                        <img src={img1} width="400px" height="197px" alt="" />
                    </div>
                    <div className="name-skin">
                        <p>AK-47 | Asiimov</p>
                    </div>
                    <div className="condition-skin">
                        <p>Factory New</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 892.77</p>
                    </div>
                </div>
            </div>
            
      </div>
    );
  }
  
  export default ak;