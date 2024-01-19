import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { RoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props;

  return (
    <RoomsWrapper>
      {/* 页面只展示8条数据,请求到的是10条,所以要截取 */}
      {roomList?.slice(0, 8).map((item) => {
        // return <li key={item.id}>{item.name}</li>
        return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />;
      })}
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
