import React, { memo } from "react";
import { InfosWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";

const DetailInfos = memo(() => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );

  return (
    <InfosWrapper>
      <div className="content">
        <span>{detailInfo?.name}</span>
      </div>
      <div className="extra">
        <span>抱歉,缺少后台数据支持,所以暂时无法展示</span>
      </div>
    </InfosWrapper>
  );
});

export default DetailInfos;
