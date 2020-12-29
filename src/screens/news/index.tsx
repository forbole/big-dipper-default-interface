import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { Layout } from '@components';
import { useGetStyles } from './styles';

const News = () => {
  const { t } = useTranslation(['news', 'common']);
  const { classes } = useGetStyles();
  return (
    <Layout
      searchBar={{
        searchBarPlaceholder: t('searchbar'),
        searchBarCallback: () => {},
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
