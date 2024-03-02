import React, { memo, useCallback, useState } from "react";
import { SectionV2Wrapper } from "./style";
import PropTypes from "prop-types";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  // 从props中获取数据(memo里面不要忘了写props,不然没有数据)
  const { infoData } = props;
  //定义一个初始化的值
  const initialName = Object.keys(infoData.dest_list)[0];
  // 定义一个name
  // const [name, setName] = useState("佛山");
  const [name, setName] = useState(initialName);
  const tabClickHandle = useCallback((index, name) => {
    // console.log(name);
    setName(name);
  }, []);
  // 对tabs的数据处理
  const tabNames = infoData?.dest_address?.map((item) => item.name);
  // console.log(tabsNames);

  return (
    <SectionV2Wrapper>
      <div className="discount">
        {/* 标题 */}
        <SectionHeader title={infoData?.title} subTitle={infoData.subtitle} />
        {/* tabs */}
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
        {/* room-item */}
        <SectionRooms
          // roomList={infoData.dest_list?.["成都"]}
          roomList={infoData.dest_list?.[name]}
          itemWidth="33.33%"
        />
      </div>
      <SectionFooter info={name}/>
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
