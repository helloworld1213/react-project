import React, { memo } from "react";
import { SectionV3Wrapper } from "./style";
import PropTypes from "prop-types";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import ScrollViews from "@/base-ui/scroll-views";
import SectionFooter from "@/components/section-footer";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;

  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className="plus-content">
        <ScrollViews>
          {infoData.list.map((item) => {
            return <RoomItem itemData={item} itemWidth="20%" key={item.id} />;
          })}
        </ScrollViews>
      </div>
      <SectionFooter info="plus" />
    </SectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV3;
