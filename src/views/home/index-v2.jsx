import React, { memo, useCallback, useEffect, useState } from "react";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import SectionHeader from "@/components/section-header";
// import RoomItem from "@/components/room-item";
// import SectionRooms from "@/components/section-rooms";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";


// home-section-v2的封装
const Home = memo(() => {
  //解构出来,不然下面写的太繁琐了
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
    }),
    shallowEqual
  );

  // 定义一个name
  const [name, setName] = useState("佛山");
  const tabClickHandle = useCallback((index, name) => {
    // console.log(name);
    setName(name)
  }, []);
  // 对tabs的数据处理
  const tabNames = discountInfo?.dest_address?.map((item) => item.name);
  // console.log(tabsNames);

  //这里等同于类组件生命周期里面调用action用法
  //useDispatch非常简单，就是直接获取dispatch函数，之后在组件中直接使用即可
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣数据(未封装前) */}
        <div className="discount">
          {/* 标题 */}
          <SectionHeader
            title={discountInfo?.title}
            subTitle={discountInfo.subtitle}
          />
          {/* tabs */}
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
          {/* room-item */}
          <SectionRooms
            // roomList={discountInfo.dest_list?.["成都"]}
            roomList={discountInfo.dest_list?.[name]}
            itemWidth="33.33%"
          />
        </div>

        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
