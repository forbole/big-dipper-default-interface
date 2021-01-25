import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { NetworkItemProps } from './types';

const NetworkItem = (props: NetworkItemProps) => {
  const { classes } = useGetStyles();
  const { network } = props;
  return (
    <div className={classes.root}>
      <div className="logo-container">
        <img src={network.logo} alt="logo" />
        <div className="networks">
          <p>
            {network.name}
          </p>
          {network.links.map((x) => {
            return (
              <a href={x.url} target="_blank" rel="noreferrer" key={x.chainId}>
                <div className="item">
                  <p>
                    {x.chainId}
                  </p>
                  <div className={classnames(x.name.toLowerCase(), 'status')}>
                    {x.name}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NetworkItem;
