import IconLogo from "@/assets/svg/icon_logo";
import React, { memo } from "react";
import { LeftWrapper } from "./style";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  function logoClick() {
    navigate("/home");
  }

  return (
    <LeftWrapper>
      <div className="logo-section" onClick={(e) => logoClick()}>
        <div className="logo">
          <IconLogo />
        </div>
        <div className="content">
          <span>爱彼迎</span>
        </div>
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
