import PropTypes from "prop-types";
import React, { memo, useRef } from "react";
import { ItemWrapper } from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  const swiperRef = useRef();
  //点击箭头图片改变
  function changeClick(isRight = true) {
    return isRight ? swiperRef.current.next() : swiperRef.current.prev();
  }

  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className="inner">
        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}
        {/* 从单张图片变成了轮播图 */}
        <div className="swiper">
          <div className="control">
            <div className="btn left" onClick={(e) => changeClick(false)}>
              <IconArrowLeft width="30" height="30" />
            </div>
            <div className="btn right" onClick={(e) => changeClick(true)}>
              <IconArrowRight width="30" height="30" />
            </div>
          </div>
          <Carousel dots={false} ref={swiperRef}>
            {itemData?.picture_urls?.map((item) => {
              return (
                <div className="cover" key={item}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="desc">{itemData.verify_info.messages.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>

        <div className="bottom">
          <Rating
            // 如果数据中没有star_rating,即这个值为undefined(不是0,0可以展示)
            //给个默认值为4.5
            value={itemData?.star_rating ?? 4.5}
            readOnly
            // 精准度
            precision={0.1}
            sx={{ fontSize: "12px", color: "#00848A" }}
          />
          <span className="count">{itemData?.reviews_count}</span>
          {itemData.bottom_info?.content && (
            <span className="extra">·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
