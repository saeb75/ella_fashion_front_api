import React from "react";

const InfoBanner = ({ item }) => {
  return (
    <div className="banner">
      <div className="banner-in">
        <p className="banner_category text-center">{item.category}</p>
        <p className="banner_title text-center">{item.infoTitle}</p>
        <p className="banner_desc text-center">{item.infoDesc}</p>
        <button className="text-center">{item.button}</button>
      </div>
    </div>
  );
};

export default InfoBanner;
