import React, { memo } from "react";
import { ItemWrapper } from "./style";
import PropTypes from "prop-types";

const LongForItem = memo((props) => {
  const { itemData } = props;
  return (
    <ItemWrapper>
      <div className="inner">
        <div className="item-info">
          {/* <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div> */}
          {/* img没有用div包裹,之前一直卡在这 */}
          <img className="cover" src={itemData.picture_url} alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">均价 {itemData.price}</div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
});

LongForItem.propTypes = {
  itemData: PropTypes.object,
};

export default LongForItem;
