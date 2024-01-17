import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
// import { CenterWrapper } from "./c-cpns/header-center/style";
// import { LeftWrapper } from "./c-cpns/header-left/style";
// import { RightWrapper } from "./c-cpns/header-right/style";

const Header = memo(() => {
  return (
    <HeaderWrapper>
      {/* <LeftWrapper>
        <HeaderLeft />
      </LeftWrapper>
      <CenterWrapper>
        <HeaderCenter />
      </CenterWrapper>
      <RightWrapper>
        <HeaderRight />
      </RightWrapper> */}

      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default Header;
