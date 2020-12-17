import React from 'react';
import { Switch } from '@material-ui/core';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { ToggleProp } from './types';

const Toggle = (props: ToggleProp) => {
  const { classes } = useGetStyles();
  const {
    isToggled,
    handleChange,
    showAll,
  } = props;

  return (
    <div className={classnames(classes.root)}>
      <h4>{showAll}</h4>
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
