import React, { memo } from "react";
import { FooterWrapper } from "./style";
import PropTypes from "prop-types";

import IconMoreArrow from "@/assets/svg/icon-more-arrow";

const SectionFooter = memo((props) => {
  const { info } = props;

  let showMsg = "显示全部";
  if (info) {
    showMsg = `显示更多${info}房源`;
  }
  return (
    <FooterWrapper color={info ? 'rgb(0, 138, 130)' : '#000'}>
      <div className="info">
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
