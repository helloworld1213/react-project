import React, { memo, useState } from "react";
import { HeaderWrapper, SearchAreaWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
// import { CenterWrapper } from "./c-cpns/header-center/style";
// import { LeftWrapper } from "./c-cpns/header-left/style";
// import { RightWrapper } from "./c-cpns/header-right/style";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

const Header = memo(() => {
  // 因为三个页面共用header,所以,我们可以设置一个属性来决定
  //每个页面的头部是否需要固定(这个固定值isFixed需要保存到store里面)

  //记录状态
  const [isSearch, setIsSearch] = useState(false);

  const { headerConfigInfo } = useSelector(
    (state) => ({
      headerConfigInfo: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed } = headerConfigInfo;

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      {/* <LeftWrapper>
        <HeaderLeft />
      </LeftWrapper>
      <CenterWrapper>
        <HeaderCenter />
      </CenterWrapper>
      <RightWrapper>
        <HeaderRight />
      </RightWrapper> */}

      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter
            isSearch={isSearch}
            itemClick={(e) => setIsSearch(true)}
          />
          <HeaderRight />
        </div>
        <SearchAreaWrapper isSearch={isSearch} />
      </div>
      {isSearch && (
        <div className="cover" onClick={(e) => setIsSearch(false)}></div>
      )}
    </HeaderWrapper>
  );
});

export default Header;
