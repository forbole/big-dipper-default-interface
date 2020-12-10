import React from 'react';
import { Switch } from '@material-ui/core';
import { useGetScreenSizeHook } from '@hooks';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { ToggleProp } from './types';

const Toggle = (props: ToggleProp) => {
  const { classes } = useGetStyles();
  const { isDesktop } = useGetScreenSizeHook();
  const responsiveClass = isDesktop ? classes.desktop : classes.mobile;

  return (
    <Switch
      focusVisibleClassName={classnames('focusVisible')}
      disableRipple
      className={classnames(classes.root, responsiveClass)}
      classes={{
        switchBase: classnames('switchBase'),
        thumb: classnames('thumb'),
        track: classnames('track'),
        checked: classnames('checked'),
      }}
      {...props}
    />
  );
};

export default Toggle;
