import React from 'react';
import classnames from 'classnames';
import { useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'i18n';
import { ValidatorProfile } from 'big-dipper-default-ui';
import {
  Layout,
  HeaderBarDesktop,
  HeaderBarMobile,
} from '@components';
import {
  useMarketHook,
  useSearchbarSubmitHook,
} from '@hooks';
import { useGetStyles } from './styles';
import {
  Info,
  PowerActivities,
  StakingActivities,
  MissedBlocks,
} from './components';

const ValidatorDetails = () => {
  const theme: any = useTheme();
  const { t } = useTranslation(['validators', 'common']);
  const { communityPool } = useMarketHook();
  const { handleSearchbarSubmit } = useSearchbarSubmitHook();
  const { classes } = useGetStyles();

  return (
    <Layout
      header={(
        <HeaderBarDesktop title={t('subTitle')} communityPool={communityPool} />
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

        <div className={classnames('mobile-tablet-header')}>
          <HeaderBarMobile title={t('subTitle')} communityPool={communityPool} />
        </div>
        <div className={classnames('validator-bio')}>
          <ValidatorProfile
            className={classes.validatorProfile}
            imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
            alt="Forbole Icon"
            name="Forbole"
            bio="Lorem **ipsum** dolor sit amet, consectetur adipiscing elit. Vivamus dignissim nibh eu ex ultrices, eget vehicula arcu auctor. Ut sed sem molestie eros tempus congue at eu lorem."
            desktopWidth={theme?.breakpoints?.values?.desktop}
            keyBase={{
              display: '12345678910',
              verified: true,
              url: 'https://keybase.io',
            }}
            website="https://www.forbole.com/"
            status={{
              display: 'Active',
              className: 'active',
            }}
          />
        </div>
        <div className={classnames('validator-info')}>
          <Info />
        </div>
        <div className={classnames('validator-voting-power')}>
          validators voting power
        </div>
        <div className={classnames('missed-blocks')}>
          <MissedBlocks />
        </div>
        <div className={classnames('potential')}>
          potential
        </div>
        <div className={classnames('staking')}>
          <StakingActivities />
        </div>
        <div className={classnames('events-and-activities')}>
          <PowerActivities />
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default ValidatorDetails;
