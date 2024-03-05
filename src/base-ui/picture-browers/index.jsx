import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { BrowersWrapper } from "./style";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom";
import Indicator from "../indicator";
import classNames from "classnames";
import IconTriangleArrowTop from "@/assets/svg/icon-triangle-arrow-top";

const PictureBrowers = memo((props) => {
  const { pictureInfo, closeClick } = props;
  //保存isNext供动画使用
  const [isNext, setIsNext] = useState(true);
  //控制箭头方向
  const [showList, setShowList] = useState(true);
  // console.log(pictureInfo);
  //图片展示出来,滚动条消失,点击关闭按钮,图片滚动条显现
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  //事件处理
  function closeClickHandle() {
    if (closeClick) closeClick();
  }

  function changePicClick(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureInfo.length - 1;
    if (newIndex > pictureInfo.length - 1) newIndex = 0;
    // console.log(newIndex);

    //下面点击左右按钮展示下一张报错:
    //Too many re-renders. React limits the number of renders to prevent an infinite loopReact限制了渲染的次数，以防止无限循环
    //原因: onClick={(e) => changePicClick(false)}写成了
    //onClick={changePicClick(false)}
    setCurrentIndex(newIndex);
    //保存最新的isNext
    setIsNext(isNext);
  }

  function bottomPicClick(index) {
    //如果点击底部的图片是在当前索引的前面,则向左滚动
    setIsNext(index > currentIndex);
    setCurrentIndex(index);
  }

  return (
    <BrowersWrapper isNext={isNext} showList={showList}>
      <div className="browers-top">
        <div className="close-btn" onClick={closeClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="swiper">
        <div className="swiper-control">
          <div className="btn left" onClick={(e) => changePicClick(false)}>
            <IconArrowLeft height="77" width="77" />
          </div>
          <div className="btn right" onClick={(e) => changePicClick(true)}>
            <IconArrowRight height="77" width="77" />
          </div>
        </div>
        <div className="pictures">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureInfo[currentIndex]}
              timeout={200}
              classNames="pic"
            >
              <img src={pictureInfo[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="preview-info">
          <div className="desc">
            <div className="left">
              <span>
                {currentIndex}/{pictureInfo.length}:room{" "}
              </span>
              <span>apartment图片{currentIndex}</span>
            </div>
            <div className="right" onClick={(e) => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}照片列表</span>
              {showList ? (
                <IconTriangleArrowBottom />
              ) : (
                <IconTriangleArrowTop />
              )}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureInfo.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currentIndex === index,
                    })}
                    key={item}
                    onClick={(e) => bottomPicClick(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowersWrapper>
  );
}, []);

PictureBrowers.propTypes = {
  pictureInfo: PropTypes.array,
};

export default PictureBrowers;
