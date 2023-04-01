import React from 'react';
import "../Skins-page/Skins-page.css";
import img1 from "./Images/img-m4-1.png";
import img2 from "./Images/img-m4-2.png";
import img3 from "./Images/img-m4-3.png";


function m4() {
    return (
      <div>
        {/*Line with skin name*/}
            <div className="page-line">
                <div className="line-1" />
                    <p className="line-skin-name">M4A4</p>
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
                        <p>M4A4 | Poseidon</p>
                    </div>
                    <div className="condition-skin">
                        <p>Minimal Wear</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 1 645.37</p>
                    </div>
                </div>
                {/*Box witch skin*/}
                <div className="skin-2">
                    <div className="img-skin">
                        <img src={img2} width="400px" height="197px" alt="" />
                    </div>
                    <div className="name-skin">
                        <p>M4A4 | Asiimov</p>
                    </div>
                    <div className="condition-skin">
                        <p>Field-Tested</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 638.49</p>
                    </div>
                </div>
                {/*Box witch skin*/}
                <div className="skin-3">
                    <div className="img-skin">
                        <img src={img1} width="400px" height="197px" alt="" />
                    </div>
                    <div className="name-skin">
                        <p>M4A4 | The Emperor</p>
                    </div>
                    <div className="condition-skin">
                        <p>Factory New</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 2 879.82</p>
                    </div>
                </div>
            </div>
            
      </div>
    );
  }
  
  export default m4;