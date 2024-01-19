import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";

const SectionTabs = memo((props) => {
  //获取tabsName
  const { tabsName = [] } = props;
  //创建索引
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemHandleClick(index) {
    // console.log(index);
    setCurrentIndex(index)
  }

  return (
    <TabsWrapper>
      {tabsName.map((item, index) => {
        return (
          <div
            className={classNames("item", {active: index === currentIndex})}
            key={index}
            onClick={() => itemHandleClick(index)}
          >
            {item}
          </div>
        );
      })}
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabsName: PropTypes.array,
};

export default SectionTabs;
