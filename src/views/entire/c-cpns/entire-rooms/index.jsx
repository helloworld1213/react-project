import React, { memo } from "react";
import { RoomsWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";

import RoomItem from "@/components/room-item";

const EntrieRooms = memo(() => {
  const { roomListInfo, totalCountInfo, isLoadingInfo } = useSelector(
    (state) => ({
      roomListInfo: state.entire.roomList,
      totalCountInfo: state.entire.totalCount,
      isLoadingInfo: state.entire.isLoading,
    }),
    shallowEqual
  );

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCountInfo}多处房源</h2>
      <div className="list">
        {roomListInfo?.map((item) => {
          return <RoomItem itemData={item} itemWidth="20%" key={item.id} />;
        })}
      </div>
      {/* 添加蒙版, 防止清晰看出数据加载慢 */}
      {isLoadingInfo && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default EntrieRooms;
