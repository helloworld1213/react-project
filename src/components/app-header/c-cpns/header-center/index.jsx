import React, { memo, useState } from "react";
import { CenterWrapper } from "./style";
import IconSearch from "@/assets/svg/icon_search";
import SearchTabs from "./c-cpns/search-tabs";
import searchTitles from "@/assets/data/search_titles.json";
import SearchSections from "./c-cpns/search-sections";
import { CSSTransition } from "react-transition-group";

const HeaderCenter = memo((props) => {
  const [tabIndex, setTabIndex] = useState(0);

  //模拟数据: 从data里面获取数据并过滤出title
  const titles = searchTitles.map((item) => item.title);

  const { isSearch, itemClick } = props;

  function itemHandleClick() {
    if (itemClick) itemClick();
  }

  return (
    <CenterWrapper>
      {/* 展示搜索 或者展示搜索详情 */}
      <CSSTransition
        in={!isSearch}
        timeout={250}
        classNames="bar"
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={itemHandleClick}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        timeout={250}
        classNames="bar"
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections
              searchInfos={searchTitles[tabIndex].searchInfos}
              tabIndex={tabIndex}
            />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
