import React from "react";
import Brands from "../../common/brands";

const BrandArea = () => {
  return (
    <div className="tp-brand-area pt-100 pb-100 grey-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-brand-section text-center pb-60">
              <h4 className="tp-brand-title">
                Clientes que estão crescendo com a Trendor
              </h4>
            </div>
          </div>
        </div>
        <div className="tp-brand-slider-section">
          <div className="swiper-container brand-slider-active">
            <Brands />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
