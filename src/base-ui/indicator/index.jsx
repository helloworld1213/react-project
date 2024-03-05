import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";
import PropTypes from "prop-types";

const Indicator = memo((props) => {
  const { selectIndex } = props;
  const contentRef = useRef();

  useEffect(() => {
    // console.log(selectIndex, "useEffect");
    //获取到最新的点击的索引,在这里计算要滚动的距离
    // console.log(contentRef.current.children[selectIndex]);
    //拿到选中索引的那个元素
    const selectItemEl = contentRef.current.children[selectIndex];
    //选中元素的左偏移
    const selectItemElOffsetLeft = selectItemEl.offsetLeft;
    //选中元素的宽度
    const selectItemElWidth = selectItemEl.clientWidth;

    //页面展示内容的宽度
    const contentRefWidth = contentRef.current.clientWidth;
    //滚动距离(元素内容宽度的一种度量，包括由于 overflow 溢出而在屏幕上
    //不可见的内容)
    const contentRefScroll = contentRef.current.scrollWidth;

    let distance =
      selectItemElOffsetLeft + selectItemElWidth * 0.5 - contentRefWidth * 0.5;

    //可移动最大距离(整个滚动距离 - 自身宽度)
    const totalDistance = contentRefScroll - contentRefWidth;

    if (distance < 0) distance = 0; //左侧特殊情况
    if (distance > totalDistance) distance = totalDistance; //右侧特殊情况

    //改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      {/* 插槽 */}
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
