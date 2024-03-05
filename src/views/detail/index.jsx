import React, { memo } from "react";
import { DetailWrapper } from "./style";
import DetailPictures from "./detail-pictures";
import DetailInfos from "./detail-infos";

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  );
});

export default Detail;
