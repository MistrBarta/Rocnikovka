import React from 'react';
import "../Skins-page/Skins-page.css";
import img1 from "./Images/img-awp-1.png";
import img2 from "./Images/img-awp-2.png";
import img3 from "./Images/img-awp-3.png";


function awp() {
    return (
      <div>
        {/*Line with skin name*/}
            <div className="page-line">
                <div className="line-1" />
                    <p className="line-skin-name">AWP</p>
                <div className="line-2" />
            </div>
            {/*Section with skins*/}
            <div className="skins-a">
                {/*Box witch skin*/}
                <div className="skin-1">
                    <div className="img-skin">
                        <img src={img1} width="400px" height="197px" alt="" />
                    </div>
                    <div className="name-skin">
                        <p>AWP | Medusa</p>
                    </div>
                    <div className="condition-skin">
                        <p>Field-Tested</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 3 164.13</p>
                    </div>
                </div>
                {/*Box witch skin*/}
                <div className="skin-2">
                    <div className="img-skin">
                        <img src={img2} width="400px" height="197px" alt="" />
                    </div>
                    <div className="name-skin">
                        <p>AWP | Dragon Lore</p>
                    </div>
                    <div className="condition-skin">
                        <p>Field-Tested</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 9 920.81</p>
                    </div>
                </div>
                {/*Box witch skin*/}
                <div className="skin-3">
                    <div className="img-skin">
                        <img src={img3} width="400px" height="197px" alt="" />
                    </div>
                    <div className="name-skin">
                        <p>AWP | The Prince</p>
                    </div>
                    <div className="condition-skin">
                        <p>Field-Tested</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 4 242.35</p>
                    </div>
                </div>
            </div>
            
      </div>
    );
  }
  
  export default awp;