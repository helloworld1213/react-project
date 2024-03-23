import React, { memo } from "react";
import { BarWrapper } from "./style";
import CityData from "@/assets/data/city_data.json";

const RecommendBar = memo(() => {
  const { recommendsData=[], hotData=[] } = CityData;
  console.log(recommendsData);
  return (
    <BarWrapper>
      <div className="bar-content">
        <div className="recommend-list">
          <h2>为你推荐</h2>
          {recommendsData?.map((item, index) => {
            return (
              <div className="item" key={item}>
                {item}
              </div>
            );
          })}
        </div>
        <div className="hot-list">
        <h2>全球热门区域</h2>
          {hotData.map((item, index) => {
            return (
              <div className="item" key={item}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </BarWrapper>
  );
});

export default RecommendBar;
