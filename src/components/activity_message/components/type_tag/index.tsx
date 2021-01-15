import React from 'react';
import { useGetStyles } from './styles';

const TypeTag = (props: { type: string;}) => {
  const { type } = props;

  const { classes } = useGetStyles();

  return (
    <div className={classes.root}>
      <div className="tag">
        type lives here
      </div>
    </div>
  );
};

export default TypeTag;
