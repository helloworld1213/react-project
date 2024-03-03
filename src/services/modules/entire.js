import instanceRequest from "../request";

//offset: 偏移量,这里指的是偏移多少个房间列表
//size: 每页房间个数
export function getEntireRoomListData(offset = 0, size = 20) {
  return instanceRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
