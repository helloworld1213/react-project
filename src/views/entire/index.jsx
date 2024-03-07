import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntrieFilter from "./c-cpns/entire-filter";
import EntrieRooms from "./c-cpns/entire-rooms";
import EntriePagination from "./c-cpns/entire-pagination";
import { useDispatch } from "react-redux";

import { fetchEntireDataAction } from "@/store/modules/entire";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Entrie = memo(() => {
  //调用action获取数据,然后保存到redux中
  //需要用到哪个数据,就在哪个组件里面映射
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntireDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true }));
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntrieFilter />
      <EntrieRooms />
      <EntriePagination />
    </EntireWrapper>
  );
});

export default Entrie;
