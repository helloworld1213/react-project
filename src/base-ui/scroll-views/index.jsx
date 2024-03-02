import React, { memo, useEffect, useRef, useState } from "react";
import { ViewsWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollViews = memo((props) => {
  const [showRightBtn, setShowRightBtn] = useState(false);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [positionIndex, setPositionIndex] = useState(0);
  const totalWidthRef = useRef();

  //组件渲染完毕,判断是否渲染右侧的按钮
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; //可滚动距离
    const clientWidth = scrollContentRef.current.clientWidth; //本身宽度
    const totalWidth = scrollWidth - clientWidth;

    //在函数rightBtnClick里面用到了totalWidth,所以要记录下来
    totalWidthRef.current = totalWidth;

    setShowRightBtn(totalWidth > 0);
  }, [props.children]);

  //事件处理
  // function rightBtnClick() {
  //   //索引加一
  //   const newIndex = positionIndex + 1;
  //   //新索引对应的新的元素
  //   const newEl = scrollContentRef.current.children[newIndex];
  //   // console.log(newEl);
  //   //新元素的偏移量(相对于定位父元素的坐偏移)
  //   // console.log(newEl.offsetLeft);
  //   const newElOffsetLeft = newEl.offsetLeft;
  //   //给当前元素添加样式
  //   scrollContentRef.current.style.transform = `translate(${-newElOffsetLeft}px)`;
  //   //记录新的索引位置
  //   setPositionIndex(newIndex);
  //   //右侧按钮是否需要展示
  //   setShowRightBtn(totalWidthRef.current > newElOffsetLeft);
  //   //左侧按钮是否需要展示
  //   setShowLeftBtn(newElOffsetLeft > 0);
  // }

  // function leftBtnClick() {
  //   //索引加一
  //   const newIndex = positionIndex - 1;
  //   //新索引对应的新的元素
  //   const newEl = scrollContentRef.current.children[newIndex];
  //   // console.log(newEl);
  //   //新元素的偏移量(相对于定位父元素的坐偏移)
  //   // console.log(newEl.offsetLeft);
  //   const newElOffsetLeft = newEl.offsetLeft;
  //   //给当前元素添加样式
  //   scrollContentRef.current.style.transform = `translate(${-newElOffsetLeft}px)`;
  //   //记录新的索引位置
  //   setPositionIndex(newIndex);
  //   //右侧按钮是否需要展示
  //   setShowRightBtn(totalWidthRef.current > newElOffsetLeft);
  //   //左侧按钮是否需要展示
  //   setShowLeftBtn(newElOffsetLeft > 0);
  // }

  //左右逻辑除了第一行剩下都一样,所以抽离
  function totalBtnClick(isRight) {
    //索引加一
    const newIndex = isRight ? positionIndex + 1 : positionIndex - 1;
    //新索引对应的新的元素
    const newEl = scrollContentRef.current.children[newIndex];
    // console.log(newEl);
    //新元素的偏移量(相对于定位父元素的坐偏移)
    // console.log(newEl.offsetLeft);
    const newElOffsetLeft = newEl.offsetLeft;
    //给当前元素添加样式
    scrollContentRef.current.style.transform = `translate(${-newElOffsetLeft}px)`;
    //记录新的索引位置
    setPositionIndex(newIndex);
    //右侧按钮是否需要展示
    setShowRightBtn(totalWidthRef.current > newElOffsetLeft);
    //左侧按钮是否需要展示
    setShowLeftBtn(newElOffsetLeft > 0);
  }
  return (
    <ViewsWrapper>
      {showLeftBtn && (
        <div className="control left" onClick={(e) => totalBtnClick(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRightBtn && (
        <div className="control right" onClick={(e) => totalBtnClick(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-slot" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewsWrapper>
  );
});

export default ScrollViews;
