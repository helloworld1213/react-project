import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";
import Indicator from "@/base-ui/indicator";

const Demo = memo(() => {
  const names = ["aaaaaa", "bbbbbbbb", "ccc", "ddd", "eee", "fff", "ggg"];

  // 记录选中索引(selectIndex不要忘了赋值0,不然下面函数的操作打印出啦是NaN)
  const [selectIndex, setSelectIndex] = useState(0);

  //事件逻辑处理
  function changeSelectClick(isNext = true) {
    //判断点击的是上一个还是下一个
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    //如果点击下一个,一直到最大值为数组length-1为止,不准超出
    if (newIndex > names.length - 1) newIndex = names.length - 1;
    //如果点击上一个,则最小值为0,不允许负数
    if (newIndex < 0) newIndex = 0;
    setSelectIndex(newIndex);
    // console.log(newIndex);
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={(e) => changeSelectClick(false)}>上一个</button>
        <button onClick={(e) => changeSelectClick(true)}>下一个</button>

        <div className="list">
          {/* 把选中的索引传入到indicator */}
          <Indicator selectIndex={selectIndex}>
            {names.map((item) => {
              return <button key={item}>{item}</button>;
            })}
          </Indicator>
        </div>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
