import React, { useEffect, useState } from "react";
import CommunityCarousel from "../../components/community-carousel/community-carousel";
import Api from "../../utils/api";
import { API } from "../../constants/apiPath";
import HomePage from "./Homepage";

const Community = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = async () => {
    try {
        const response = await Api.get(API.GET_FEED);
        response && setFeedData(response);
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <HomePage>
      <CommunityCarousel feedData={feedData} />
    </HomePage>
  );
};

export default Community;
