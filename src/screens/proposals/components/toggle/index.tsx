import React from 'react';
import { Switch } from '@material-ui/core';
import { useGetScreenSizeHook } from '@hooks';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { ToggleProp } from './types';

const Toggle = (props: ToggleProp) => {
  const { classes } = useGetStyles();
  const { isDesktop } = useGetScreenSizeHook();
  const {
    isToggled,
    handleChange,
  } = props;
  const responsiveClass = isDesktop ? classes.desktop : classes.mobile;

  return (
    <div className={classnames(classes.root, responsiveClass)}>
      <h4>Show All</h4>
      <Switch
        checked={isToggled}
        onChange={handleChange}
        focusVisibleClassName={classnames('focusVisible')}
        disableRipple
        className={classnames('switch')}
        classes={{
          switchBase: classnames('switchBase'),
          thumb: classnames('thumb'),
          track: classnames('track'),
          checked: classnames('checked'),
        }}
      />
    </div>
  );
};

export default Toggle;
