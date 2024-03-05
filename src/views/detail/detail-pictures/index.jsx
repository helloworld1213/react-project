import React, { memo, useState } from "react";
import { PicturesWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import PictureBrowers from "@/base-ui/picture-browers";

const DetailPictures = memo(() => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );

  // 控制picture-browers的显示与隐藏
  const [showBrowers, setShowBrowers] = useState(false);

  return (
    <PicturesWrapper>
      {/* 图片 */}
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={(e) => setShowBrowers(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div
                className="item"
                key={item}
                onClick={(e) => setShowBrowers(true)}
              >
                <img src={detailInfo?.picture_urls?.[0]} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      {/* 按钮 */}
      <div className="show-btn" onClick={(e) => setShowBrowers(true)}>
        显示图片
      </div>
      {/* 点击跳转 */}
      {showBrowers && (
        <PictureBrowers
          pictureInfo={detailInfo.picture_urls}
          closeClick={(e) => setShowBrowers(false)}
        />
      )}
    </PicturesWrapper>
  );
});

export default DetailPictures;
