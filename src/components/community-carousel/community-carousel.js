import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CommunityCard from "../community-card/community-card";
import "./community-carousel.css";
import {isMobileTablet} from '../../utils/commonUtils';

const CommunityCarousel = ({ feedData }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1201 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1025 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 501 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  const isMobile = isMobileTablet();

  return (
    <div>
      {feedData.map((feed) => (
        <div key={feed.categoryName}>
          <div className="category-title">
            <p>{feed.categoryName}</p>
          </div>

          <div className="community-carousel">
            <Carousel
              arrows={(feed.items.length && feed.items.length > 4) || isMobile}
              responsive={responsive}
            >
              {feed.items.map((community) => (
                <CommunityCard cardDetails={community} key={community.title} />
              ))}
            </Carousel>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityCarousel;
