import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";
import ScrollViews from "@/base-ui/scroll-views";

const SectionTabs = memo((props) => {
  //获取tabsName
  const { tabNames = [], tabClick } = props;
  //创建索引
  const [currentIndex, setCurrentIndex] = useState(0);

  function itemHandleClick(index, item) {
    console.log(index);
    setCurrentIndex(index);
    tabClick(index, item);
  }

  return (
    // <TabsWrapper>
    //   {tabNames.map((item, index) => {
    //     return (
    //       <div
    //         className={classNames("item", {active: index === currentIndex})}
    //         key={index}
    //         onClick={() => itemHandleClick(index, item)}
    //       >
    //         {item}
    //       </div>
    //     );
    //   })}
    // </TabsWrapper>

    <TabsWrapper>
      <ScrollViews>
        {tabNames.map((item, index) => {
          return (
            <div
              className={classNames("item", { active: index === currentIndex })}
              key={index}
              onClick={() => itemHandleClick(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollViews>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabsName: PropTypes.array,
};

export default SectionTabs;
