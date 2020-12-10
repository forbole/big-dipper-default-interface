import React from 'react';

/**
 * Helper component that deals with Mui tab switches
 */
const TabPanel = (props: any) => {
  const {
    children, value, index, ...other
  } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        children
      )}
    </div>
  );
};

export default TabPanel;
