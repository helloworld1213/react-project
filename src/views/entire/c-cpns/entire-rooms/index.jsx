import React, { memo, useCallback } from "react";
import { RoomsWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";
import { changeDetialInfoAction } from "@/store/modules/detail";

const EntrieRooms = memo(() => {
  const { roomListInfo, totalCountInfo, isLoadingInfo } = useSelector(
    (state) => ({
      roomListInfo: state.entire.roomList,
      totalCountInfo: state.entire.totalCount,
      isLoadingInfo: state.entire.isLoading,
    }),
    shallowEqual
  );

  //点击图片跳转到详情页
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemHandleClick = useCallback(
    (itemInfo) => {
      // console.log("roomwrapper click", itemInfo);
      //调用action将点击的信息存储到redux
      dispatch(changeDetialInfoAction(itemInfo));
      navigate("/detail");
    },
    [navigate, dispatch]
  );

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCountInfo}多处房源</h2>
      <div className="list">
        {roomListInfo?.map((item) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item._id}
              itemClick={(itemInfo) => itemHandleClick(itemInfo)}
            />
          );
        })}
      </div>
      {/* 添加蒙版, 防止清晰看出数据加载慢 */}
      {isLoadingInfo && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default EntrieRooms;
