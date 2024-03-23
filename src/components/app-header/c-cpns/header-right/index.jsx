import React, { memo } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";
import { useState, useEffect } from "react";

const HeaderRight = memo(() => {
  // 定义组件内部的状态
  const [showPanel, setShowPanel] = useState(false);

  //副作用
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }
    //给window添加click事件
    //addEventListener((type, listener, useCapture)
    //useCapture是true表示捕获阶段触发
    window.addEventListener("click", windowHandleClick, true);
    //取消click事件
    return () => {
      window.removeEventListener("click", windowHandleClick);
    };
  }, []);

  //控制面板的显示与隐藏
  function handlePanelClick() {
    setShowPanel(true);
  }

  function btnClick() {
    console.log("====");
  }

  return (
    <RightWrapper>
      <div className="icon">
        <span className="btn" title="语言">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={(e) => handlePanelClick()}>
        <IconMenu />
        <IconAvatar />
        <span className="dot"></span>

        {showPanel && (
          <div className="panel">
            <div className="top" onClick={(e) => btnClick()}>
              <div className="register item">注册</div>
              <div className="login item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">来爱彼迎发布房源</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
