import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import { Pagination } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchEntireDataAction } from "@/store/modules/entire";

const EntriePagination = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );

  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  const totalPage = Math.ceil(totalCount / 20);

  //改变页码数据发生变化
  const dispatch = useDispatch();
  //页码是从1开始的
  function PaginationChangeClick(event, pageCount) {
    // console.log(pageCount);
    //改变页码前先回到顶部
    window.scrollTo(0, 0);
    dispatch(fetchEntireDataAction(pageCount - 1));
  }

  return (
    <PaginationWrapper>
      {roomList.length && (
        <div className="info">
          <Pagination
            count={totalPage}
            color="secondary"
            onChange={PaginationChangeClick}
          />
          <div className="desc">
            第{startCount}-{endCount}个房源, 共超过{totalCount}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntriePagination;
