import React, { memo, useEffect } from "react";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import SectionHeader from "@/components/section-header";
// import RoomItem from "@/components/room-item";
// import SectionRooms from "@/components/section-rooms";
import HomeSectionV1 from "./c-cpns/home-section-v1";
// import SectionHeader from "@/components/section-header";
// import SectionRooms from "@/components/section-rooms";
// import SectionTabs from "@/components/section-tabs";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeLongFor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Home = memo(() => {
  //解构出来,不然下面写的太繁琐了
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotrecommenddestInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotrecommenddestInfo: state.home.hotrecommenddestInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  // 定义一个name
  // const [name, setName] = useState("佛山");
  // const tabClickHandle = useCallback((index, name) => {
  //   // console.log(name);
  //   setName(name);
  // }, []);
  // // 对tabs的数据处理
  // const tabNames = discountInfo?.dest_address?.map((item) => item.name);
  // // console.log(tabsNames);

  //这里等同于类组件生命周期里面调用action用法
  //useDispatch非常简单，就是直接获取dispatch函数，之后在组件中直接使用即可
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
    // 决定header是否固定
    dispatch(changeHeaderConfigAction({ isFixed: true }));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 在有值的情况下才渲染,保证HomeSectionV2初始化值是第一次渲染 */}
        {/* 因为useState(初始值)只有在组件第一次被渲染时有效 */}
        {Object.keys(discountInfo).length && (
          <HomeSectionV2 infoData={discountInfo} />
        )}
        {Object.keys(hotrecommenddestInfo).length && (
          <HomeSectionV2 infoData={hotrecommenddestInfo} />
        )}

        {Object.keys(longforInfo).length && (
          <HomeLongFor infoData={longforInfo} />
        )}

        {Object.keys(goodPriceInfo).length && (
          <HomeSectionV1 infoData={goodPriceInfo} />
        )}
        {Object.keys(highScoreInfo).length && (
          <HomeSectionV1 infoData={highScoreInfo} />
        )}

        {/* <HomeSectionV2 infoData={discountInfo} />

        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} /> */}

        {Object.keys(plusInfo).length && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
