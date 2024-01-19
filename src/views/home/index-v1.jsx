import React, { memo, useEffect } from "react";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import SectionHeader from "@/components/section-header";
// import RoomItem from "@/components/room-item";
import SectionRooms from "@/components/section-rooms";
// import HomeSectionV1 from "./c-cpns/home-section-v1";

const Home = memo(() => {
  //解构出来,不然下面写的太繁琐了
  const { goodPriceInfo, highScoreInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
    }),
    shallowEqual
  );

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
        <div className="good-price">
          {/* 版本1 */}
          <SectionHeader title={goodPriceInfo?.title} />
          {/* <ul className="room-list">
            页面只展示8条数据,请求到的是10条,所以要截取
            {goodPriceInfo.list?.slice(0, 8).map((item) => {
              return <li key={item.id}>{item.name}</li>
              return <RoomItem itemData={item} key={item.id}/>;
            })}
          </ul> */}
          {/* 将room-list封装成一个组件 */}
          <SectionRooms roomList={goodPriceInfo?.list} />
        </div>

        <div className="high-score">
          <SectionHeader
            title={highScoreInfo?.title}
            subTitle={highScoreInfo?.subtitle}
          />
          <SectionRooms roomList={highScoreInfo?.list} />
        </div>

        {/* 版本2,具体看index.js */}
        {/* <HomeSectionV1 itemInfo={goodPriceInfo}/>
        <HomeSectionV1 itemInfo={highScoreInfo}/> */}
      </div>
    </HomeWrapper>
  );
});

export default Home;
