import React from 'react';
import classnames from 'classnames';
import { networkDummy } from '../../utils';
import { useGetStyles } from './styles';

const NetworkItem = () => {
  const { classes } = useGetStyles();

  return (
    <div className={classes.root}>
      <div className="logo-container">
        <img src={networkDummy.logo} alt="logo" />
        <div className="networks">
          <p>
            {networkDummy.name}
          </p>
          {networkDummy.links.map((x) => {
            return (
              <a href={x.url} target="_blank" rel="noreferrer" key={x.chain_id}>
                <div className="item">
                  <p>
                    {x.chain_id}
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
