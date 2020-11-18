import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { DesktopHeaderBar } from 'big-dipper-internal-ui';
import { Stabilities } from 'big-dipper-default-ui';
import {
  Layout,
  DataBlocksHeader,
} from '@components';
import { useTheme } from '@material-ui/core/styles';
import { useHomeHook } from './hooks';
import { useGetStyles } from './styles';

const Home = () => {
  const { t } = useTranslation(['home', 'common']);
  const { handleSearchbarSubmit } = useHomeHook();
  const { classes } = useGetStyles();
  const theme:any = useTheme();
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
      display: '$515,551',
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
          title: 'Bonded', value: 100000, display: '10,000',
        },
        {
          title: 'UnBonded', value: 91235.473, display: '91,235.4',
        },
        ],
    },
    color: {
      font1: theme?.palette?.custom?.fonts?.fontOne,
      font2: theme?.palette?.custom?.fonts?.fontTwo,
      line: '#E8E8E8',
      colors: ['#FF7846', '#FFD800'],
    },
    classname: {

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
