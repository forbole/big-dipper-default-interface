import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import InfiniteScroll from 'react-infinite-scroller';
import {
  LatestActivitiesMobile,
  LatestActivitiesDesktop,
} from 'big-dipper-default-ui';
import {
  MenuItem,
  Select,
  InputBase,
  Typography,
} from '@material-ui/core';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
  HeaderBarMobile,
  InfiniteLoader,
} from '@components';
import {
  useMobileOnlyStyles,
  useDesktopOnlyStyles,
  useLatestActivitiesMobileStyles,
  useLatestActivitiesDesktopStyles,
} from '@styles';
import { useMarketHook } from '@hooks';
import { useActivitiesHook } from './hooks';
import { useGetStyles } from './styles';
import {
  getCollapsibleLabels, getFilterLabels,
} from './utils';

const Activities = () => {
  const { t } = useTranslation(['activities', 'common']);
  const { communityPool } = useMarketHook();
  const {
    handleSearchbarSubmit,
    handleLoadMore,
    handleClick,
    handleOnFilterSelect,
    state,
  } = useActivitiesHook();
  const {
    hasMore,
    data,
    selectedFilter,
  } = state;

  const { classes } = useGetStyles();
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();
  const { classes: latestActivitiesMobileStyles } = useLatestActivitiesMobileStyles();
  const { classes: latestActivitiesDesktopStyles } = useLatestActivitiesDesktopStyles();

  const collapsibleLabels = getCollapsibleLabels(t);
  const filterLabels = getFilterLabels();

  return (
    <Layout
      header={(
        <HeaderBarDesktop title={t('title')} communityPool={communityPool} />
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
        <div className={classnames(desktopOnlyStyles.root)}>
          <DataBlocksHeader />
        </div>
        <div className={classnames(mobileOnlyStyles.root)}>
          <HeaderBarMobile title={t('title')} communityPool={communityPool} />
        </div>
        <div className={classnames('activities-content')}>
          <div className={classnames('content-header')}>
            <h1 className={classnames('content-header__title--desktop', desktopOnlyStyles.root)}>
              {t('latestActivities')}
            </h1>
            <Select
              className="content-header__select"
              displayEmpty
              MenuProps={{
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              }}
              value={selectedFilter}
              renderValue={
                selectedFilter !== '' ? undefined : () => {
                  return (
                    <p className={classnames('select__placeholder')}>
                      {t('filerBy')}
                    </p>
                  );
                }
              }
              input={<InputBase />}
            >
              {filterLabels.map((x) => {
                return (
                  <MenuItem
                    key={x.key}
                    onClick={() => handleOnFilterSelect(x)}
                    value={x.key}
                    className={classes.filterMenu}
                  >
                    <Typography variant="inherit" noWrap>
                      {t(x.display)}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          {/* ================================ */}
          {/* activity table */}
          {/* ================================ */}
          <InfiniteScroll
            pageStart={0}
            loadMore={handleLoadMore}
            hasMore={hasMore}
            loader={<InfiniteLoader key={0} />}
          >
            {/* ================================ */}
            {/* mobile */}
            {/* ================================ */}
            <LatestActivitiesMobile
              className={classnames(
                mobileOnlyStyles.root,
                classes.latestActivitiesMobile,
                latestActivitiesMobileStyles.root,
              )}
              data={data}
              onClick={handleClick}
            />
            {/* ================================ */}
            {/* desktop */}
            {/* ================================ */}
            <LatestActivitiesDesktop
              collapsibleLabels={collapsibleLabels}
              data={data}
              className={classnames(
                desktopOnlyStyles.root,
                latestActivitiesDesktopStyles.root,
              )}
            />
          </InfiniteScroll>
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default Activities;
