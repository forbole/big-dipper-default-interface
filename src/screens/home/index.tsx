import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { DesktopHeaderBar } from 'big-dipper-internal-ui';
<<<<<<< HEAD
import { Stabilities } from 'big-dipper-default-ui';
import { Layout } from '@components';
=======
import {
  Layout,
  DataBlocksHeader,
} from '@components';
>>>>>>> 974664de55059496b50315e43536632119e9d415
import { useHomeHook } from './hooks';
import { useGetStyles } from './styles';

const Home = () => {
  const { t } = useTranslation(['home', 'common']);
  const { handleSearchbarSubmit } = useHomeHook();
  const { classes } = useGetStyles();
  const args = {
    title: 'Stabilities',
    coin: 'ATOM',
    price: {
      title: 'Price',
      display: '$2.756',
    },
    inflation: {
      title: 'Inflation',
      display: '7.01%',
    },
    marketCap: {
      title: 'Market Cap',
      display: '$515,551,345',
    },
    communityPool: {
      title: 'Community Pool',
      display: '370,000',
    },
    data: {
      total: {
        value: 191235.473,
        display: '0.19 m',
      },
      detail:
        [{
          title: 'Bonded', value: 100000, display: '10,000000',
        },
        {
          title: 'UnBonded', value: 91235.473, display: '91,235000',
        },
        ],
    },
  };
  return (
    <Layout
      header={(
        <DesktopHeaderBar
          title={t('title')}
          market={[
            {
              key: 'Price',
              value: '$2.75',
            },
            {
              key: 'Market Cap',
              value: '$515,555.75',
            },
            {
              key: 'Inflation',
              value: '7.95%',
            },
            {
              key: 'Community Pool',
              value: '3,400,000 ATOM',
            },
          ]}
        />
      )}
      searchBar={{
        searchBarPlaceholder: t('common:searchbar'),
        searchBarCallback: handleSearchbarSubmit,
      }}
    >
      {/* ===================================== */}
      {/* content start */}
      {/* ===================================== */}
      <div className={classnames(classes.root)}>
        {/* block start */}
        <DataBlocksHeader />
        {/* graphs start */}
        <div className={classnames('data-graphs')}>
          data graphs
        </div>
        {/* stabilities start */}
        <div className={classnames('stablities')}>
          <Stabilities
            {...args}
          />
        </div>
        {/* consensus start */}
        <div className={classnames('consensus')}>
          consensus
        </div>
        {/* blocks start */}
        <div className={classnames('latest-blocks')}>
          latest blocks
        </div>
        {/* latest activities start */}
        <div className={classnames('latest-activites')}>
          latest activites
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Home;
