import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { ItemWrapper } from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const swiperRef = useRef();

  const [selectIndex, setSelectIndex] = useState(0);

  //点击箭头图片改变
  function changeClick(isNext = true, event) {
    isNext ? swiperRef.current.next() : swiperRef.current.prev();

    //获取最新索引值,点击底部indicator发生相应变化
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    const length = itemData.picture_urls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex);

    //阻止冒泡
    event.stopPropagation();
  }

  //点击跳转(因为只有entire里面的图片点击才会跳转,首页不希望,所以把事件
  //传递出去)
  function itemClickToDetail(itemData) {
    // console.log("click");
    if (itemClick) itemClick(itemData);
  }

  //不同情况下展示的图片不同(单张图片/轮播图)
  const pictureEl = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );
  const swiperEl = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => changeClick(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={(e) => changeClick(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      {/* indicator */}
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>

      {/* 轮播图 */}
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
  );

  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={(e) => itemClickToDetail(itemData)}
    >
      <div className="inner">
        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}
        {/* 从单张图片变成了轮播图 */}
        {/* <div className="swiper">
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
        </div> */}
        {/* 逻辑判断是展示轮播图还是单张图片 */}
        {itemData?.picture_urls ? swiperEl : pictureEl}

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
