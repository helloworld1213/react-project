import React, { memo } from "react";
import { PanelWrapper } from "./style";

const TabPanel = memo((props) => {
  const { children } = props;

  return <PanelWrapper>{children}</PanelWrapper>;
});

export default TabPanel;
