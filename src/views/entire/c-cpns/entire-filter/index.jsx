import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntrieFilter = memo(() => {
  //创建一个数组来收集点击过滤的对象
  const [selectItems, setSelectItems] = useState([]);

  function itemClick(item) {
    //浅拷贝再添加,而不是直接添加
    const newSelectItems = [...selectItems];

    //考虑两种情况: 1.首次点击则添加到过滤的数组中
    //如果选中后再次点击,则取消选中并从数组中移除
    if (newSelectItems.includes(item)) {
      //找出再次点击的那个索引,然后删除掉再次点击的那一项
      const itemIndex = newSelectItems.findIndex(
        (filterItem) => filterItem === item
      );
      newSelectItems.splice(itemIndex, 1);
    } else {
      //添加选中的item
      newSelectItems.push(item);
    }
    setSelectItems(newSelectItems);
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              onClick={(e) => itemClick(item)}
              key={item}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntrieFilter;
