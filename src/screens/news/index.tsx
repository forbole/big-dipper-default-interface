import React from 'react';
import classnames from '@src/screens/home/components/stabilities/node_modules/classnames';
import { useTranslation } from 'i18n';
import { Layout } from '@components';
import { useNewsHook } from './hooks';
import { useGetStyles } from './styles';

const News = () => {
  const { t } = useTranslation(['news', 'common']);
  const { handleSearchbarSubmit } = useNewsHook();
  const { classes } = useGetStyles();
  return (
    <Layout
      searchBar={{
        searchBarPlaceholder: t('searchbar'),
        searchBarCallback: handleSearchbarSubmit,
      }}
    >
      {/* ===================================== */}
      {/* content start */}
      {/* ===================================== */}
      <div className={classnames(classes.root)}>
        <div className={classnames('content-container')}>
          <div className={classnames('mobile-tablet-header')}>
            mobile tablet header
          </div>
          <div className={classnames('news-content')}>
            <div className={classnames('blogs-container')}>
              <div className={classnames('slider')}>Slider</div>
              <div className={classnames('blogs')}>
                single blogs
              </div>
            </div>
            <div className={classnames('cosmos')}>
              cosmos
            </div>
          </div>
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>
  );
};

export default News;
