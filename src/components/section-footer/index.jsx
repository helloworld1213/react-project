import React, { memo } from "react";
import { FooterWrapper } from "./style";
import PropTypes from "prop-types";

import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const { info } = props;

  let showMsg = "显示全部";
  if (info) {
    showMsg = `显示更多${info}房源`;
  }

  //路径跳转
  const navigate = useNavigate();
  function goToPathClick() {
    //跳转到别的页面的顶部
    window.scrollTo(0, 0);
    navigate("/entire");
  }

  return (
    <FooterWrapper color={info ? "rgb(0, 138, 130)" : "#000"}>
      <div className="info" onClick={(e) => goToPathClick()}>
        <span className="text">{showMsg}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  info: PropTypes.string,
};

export default SectionFooter;
