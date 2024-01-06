import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import Ck from "../assets/images/logo/calvin-klein-logo.png";
// import Nb from "../assets/images/logo/new-balance-2-logo-black-and-white.png";
// import Ro from "../assets/images/logo/rolex-logo.png";
// import Ti from "../assets/images/logo/tissot-1-logo-png-transparent.png";
// import Ua from "../assets/images/logo/under-armour-logo-black-and-white.png";

const Brands = () => {
  //Offers Carousel responsive settings
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {/* <section className="container-fluid">
        <Carousel
          responsive={responsive}
          autoPlaySpeed={100}
          autoPlay={true}
          swipeable={false}
          arrows={false}
          infinite={true}
        >
          <div className="container-sm">
            <img src={Ck} alt="Calvin-Klein" />
          </div>
          <div className="container-sm">
            <img src={Nb} alt="Calvin-Klein" />
          </div>
          <div className="container-sm">
            <img src={Ro} alt="Calvin-Klein" />
          </div>
          <div className="container-sm">
            <img src={Ti} alt="Calvin-Klein" />
          </div>
          <div className="container-sm">
            <img src={Ua} alt="Calvin-Klein" />
          </div>
          <div className="container-sm">
            <img src={Ck} alt="Calvin-Klein" />
          </div>
        </Carousel>
      </section> */}
      <section>
        <div class="container text-center">
          <div class="row">
            <Carousel>
              <div class="col">Column</div>
              <div class="col">Column</div>
              <div class="col">Column</div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
