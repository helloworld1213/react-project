import React, { memo, useEffect } from "react";
import { DetailWrapper } from "./style";
import DetailPictures from "./detail-pictures";
import DetailInfos from "./detail-infos";
import { useDispatch } from "react-redux";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: true }));
  });

  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  );
});

export default Detail;
