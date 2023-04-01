import React from 'react';
import "../Skins-page/Skins-page.css";

function Knife() {
    return (
      <div>
        <div className="page-skins">
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
                        <img src="image_1.png" width="400px" height="200px" alt="" />
                    </div>
                    <div className="name-skin">
                        <p>Name</p>
                    </div>
                    <div className="condition-skin">
                        <p>condition</p>
                    </div>
                    <div className="price-skin">
                        <p>price</p>
                    </div>
                </div>
                {/*Box witch skin*/}
                <div className="skin-2">
                    <div className="img-skin">
                        <img src="image_1.png" width="400px" height="200px" alt="" />
                    </div>
                    <div className="name-skin">
                        <p>Name</p>
                    </div>
                    <div className="condition-skin">
                        <p>condition</p>
                    </div>
                    <div className="price-skin">
                        <p>price</p>
                    </div>
                </div>
                {/*Box witch skin*/}
                <div className="skin-3">
                    <div className="img-skin">
                        <img src="image_1.png" width="400px" height="200px" alt="" />
                    </div>
                    <div className="name-skin">
                        <p>Name</p>
                    </div>
                    <div className="condition-skin">
                        <p>condition</p>
                    </div>
                    <div className="price-skin">
                        <p>price</p>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    );
  }
  
  export default Knife;