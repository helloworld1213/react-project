import React, { memo } from "react";
import { LongForWrapper } from "./style";
import PropTypes from "prop-types";
import SectionHeader from "@/components/section-header";
import LongForItem from "@/components/longfor-item";
import ScrollViews from "@/base-ui/scroll-views";

const HomeLongFor = memo((props) => {
  const { infoData } = props;

  return (
    <LongForWrapper>
      <SectionHeader title={infoData?.title} subTitle={infoData?.subtitle} />
      <div className="longfor-list">
        <ScrollViews>
          {infoData.list.map((item) => {
            return <LongForItem itemData={item} key={item.city} />;
          })}
        </ScrollViews>
      </div>
    </LongForWrapper>
  );
});

HomeLongFor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongFor;
