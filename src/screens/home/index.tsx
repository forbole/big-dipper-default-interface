import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { DesktopHeaderBar } from 'big-dipper-internal-ui';
import { Layout } from '@components';
import { useHomeHook } from './hooks';
import { useGetStyles } from './styles';

const Home = () => {
  const { t } = useTranslation(['home', 'common']);
  const { handleSearchbarSubmit } = useHomeHook();
  const { classes } = useGetStyles();
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
        <div>block one</div>
        <div>block two</div>
        <div>block three</div>
        <div>block four</div>
        {/* <div className={classnames('data-blocks-container')}>
          <div>block one</div>
          <div>block two</div>
          <div>block three</div>
          <div>block four</div>
        </div> */}
        {/* blocks end */}
        {/* graphs start */}
        <div className={classnames('data-graphs')}>
          data graphs
        </div>
        {/* graphs end */}
        <div className={classnames('data-wrapper')}>
          {/* stabilities start */}
          <div className={classnames('stablities')}>
            stabilities
          </div>
          {/* stablities end */}
          {/* consensus start */}
          <div className={classnames('consensus')}>
            consensus
          </div>
          {/* consensu end */}
        </div>
        {/* blocks start */}
        <div className={classnames('latest-blocks')}>
          latest blocks
        </div>
        {/* blocks end */}
        {/* latest activities start */}
        <div className={classnames('latest-activites')}>
          latest activites
        </div>
        {/* latest activities end */}
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Home;
