import React from "react";
import MainCoupon from "./MainCoupon";
import MainPoint from "./MainPoint";
import MainRecommend from "./MainRecommend";
import POINTS_DATA from "@/data/points";

const formatText = (text: string) => {
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {index > 0 && <br />}
      {line}
    </React.Fragment>
  ));
};

const MainPoints = () => {
  return (
    <>
      {POINTS_DATA.map((point) => (
        <MainPoint key={point.count} images={point.images} count={point.count}>
          <MainPoint.Title>{formatText(point.title)}</MainPoint.Title>
          <MainPoint.Desc>{formatText(point.description)}</MainPoint.Desc>
        </MainPoint>
      ))}
      <MainRecommend />
      <MainCoupon count={4} />
    </>
  );
};

export default MainPoints;
