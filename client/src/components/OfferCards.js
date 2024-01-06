import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const OfferCard = ({ offers }) => {
  return (
    <div className="mx-5">
      <Carousel
        swipeable={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
        responsive={responsive}
      >
        {offers?.map((offer) => (
        <Card title={offer.name}
          description={offer.description}
          price={offer.discountedPrice}
          image={`/api/v1/offer/offer-photo/${offer._id}`}
          link={offer.category}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default OfferCard;
