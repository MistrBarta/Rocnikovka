import React from 'react';
import "../Skins-page/Skins-page.css";
import img1 from "./Images/img-glove-1.png";
import img2 from "./Images/img-glove-2.png";
import img3 from "./Images/img-glove-3.png";


function glove() {
    return (
      <div>
        {/*Line with skin name*/}
            <div className="page-line">
                <div className="line-1" />
                    <p className="line-skin-name">Gloves</p>
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
                        <p>Sport Gloves | Vice</p>
                    </div>
                    <div className="condition-skin">
                        <p>Minimal Wear</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 7 092.35</p>
                    </div>
                </div>
                {/*Box witch skin*/}
                <div className="skin-2">
                    <div className="img-skin">
                        <img src={img2} width="400px" height="197px" alt="" />
                    </div>
                    <div className="name-skin">
                        <p>Sport Gloves | Slingshot</p>
                    </div>
                    <div className="condition-skin">
                        <p>Factory New</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 17 671.36</p>
                    </div>
                </div>
                {/*Box witch skin*/}
                <div className="skin-3">
                    <div className="img-skin">
                        <img src={img3} width="400px" height="197px" alt="" />
                    </div>
                    <div className="name-skin">
                        <p>Moto Gloves | Cool Mint</p>
                    </div>
                    <div className="condition-skin">
                        <p>Factory New</p>
                    </div>
                    <div className="price-skin">
                        <p>€ 3 399.14</p>
                    </div>
                </div>
            </div>
            
      </div>
    );
  }
  
  export default glove;