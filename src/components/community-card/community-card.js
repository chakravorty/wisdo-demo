import React from "react";
import "./community-card.css";
import { convertToMemberFormat } from "../../utils/commonUtils";

const CommunityCard = ({ cardDetails }) => {
  return (
    <div className="community-card pointer">
      <div
        className="card-image"
        style={{ background: "url(" + cardDetails.image + ") center top" }}
      ></div>
      <div>
        <p className="card-title">{cardDetails.title}</p>
        <div className="members-count">
          {convertToMemberFormat(cardDetails.membersCount)}
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
