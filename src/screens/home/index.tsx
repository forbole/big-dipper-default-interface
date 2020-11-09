import React from 'react';
import { useTranslation } from 'i18n';
import { DesktopHeaderBar } from 'big-dipper-internal-ui';
import { Layout } from '@components';
import { useHomeHook } from './hooks';

const Home = () => {
  const { t } = useTranslation(['home', 'common']);
  const { handleSearchbarSubmit } = useHomeHook();
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh magna, viverra sit
        amet ornare non, accumsan sit amet turpis. Maecenas at dui interdum, suscipit sem vel, ullamcorper ex. Vestibulum tristique ultrices mollis. Integer porttitor fringilla nibh sit amet aliquam. Donec sed sem arcu. Sed sed quam a erat feugiat convallis quis nec mi. Quisque laoreet rutrum velit, eu laoreet nisl efficitur eget. Nam sit amet ipsum facilisis, auctor sapien id, sollicitudin lorem. Nulla cursus lectus at scelerisque ultrices. Aliquam quis orci id dui tincidunt molestie eu ac nunc. Suspendisse ut convallis erat,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh magna, viverra sit
        amet ornare non, accumsan sit amet turpis. Maecenas at dui interdum, suscipit sem vel, ullamcorper ex. Vestibulum tristique ultrices mollis. Integer porttitor fringilla nibh sit amet aliquam. Donec sed sem arcu. Sed sed quam a erat feugiat convallis quis nec mi. Quisque laoreet rutrum velit, eu laoreet nisl efficitur eget. Nam sit amet ipsum facilisis, auctor sapien id, sollicitudin lorem. Nulla cursus lectus at scelerisque ultrices. Aliquam quis orci id dui tincidunt molestie eu ac nunc. Suspendisse ut convallis erat,
      </p>
    </Layout>
  );
};

export default Home;
