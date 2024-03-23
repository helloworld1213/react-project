import PropTypes from "prop-types";
import React, { Fragment, memo, useState } from "react";
import { SectionsWrapper } from "./style";

// import { DatePicker } from "antd";
// import TabPanel from "@/base-ui/tab-panel";
// import RecommendBar from "./recommend-bar";
// const { RangePicker } = DatePicker;

const SearchSections = memo((props) => {
  const { searchInfos, tabIndex } = props;
  // console.log(tabIndex);
  //控制日历的显示
  // const [isShow, setIsShow] = useState(false);
  //控制面板的显示与隐藏
  // const [isShowPanel, setIsShowPanel] = useState(false);

  // function isShowClick(index) {
  //   if (tabIndex === 0) {
  //     if (index === 1) {
  //       setIsShow(true);
  //     }
  //   }
  //   setIsShow(true);
  // }

  return (
    <SectionsWrapper>
      <Fragment>
        {searchInfos.map((item, index) => {
          return (
            <div className="item" key={index} title="稍后完成">
              <div
                className="info"
                // onClick={(e) => {
                //   // isShowClick(index);
                //   // setIsShowPanel(true);
                // }}
              >
                {/* {isShow && index === 1 ? (
                  <RangePicker />
                ) : (
                  <div>
                    <div className="title">{item.title}</div>
                    <div className="desc">{item.desc}</div>
                  </div>
                )}
              </div> */}

                <div>
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.desc}</div>
                </div>
              </div>

              {/* 判断是三个还是两个 */}
              {index !== searchInfos.length - 1 && (
                <div className="divider"></div>
              )}
            </div>
          );
        })}
        {/* 面板 */}
        {/* <div className="tab-panel">{isShowPanel && <TabPanel></TabPanel>}</div> */}
      </Fragment>
    </SectionsWrapper>
  );
});

SearchSections.propTypes = {
  searchInfos: PropTypes.array,
  tabIndex: PropTypes.number,
};

export default SearchSections;
