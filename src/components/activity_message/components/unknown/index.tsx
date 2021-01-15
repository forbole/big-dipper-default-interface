import React from 'react';
import { useGetStyles } from './styles';

const Unknown = () => {
  const data = {
    '@type': '/cosmos.staking.v1beta1.MsgDelegate',
    delegator_address: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    validator_address: 'desmosvaloper13yp2fq3tslq6mmtq4628q38xzj75ethz8j43kw',
    amount: {
      denom: 'udaric',
      amount: '1000',
    },
  };

  const { classes } = useGetStyles();
  return (
    <pre className={classes.root}>
      <code>
        {JSON.stringify(data, null, '\t')}
      </code>
    </pre>
  );
};

export default Unknown;
