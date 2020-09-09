import React from 'react';
import { useTranslation } from 'i18n';
import { Example } from '@components';

const Home = () => {
  const { t } = useTranslation('common');
  return (
    <div>
      <h1>{t('bigDipper')}</h1>
      <h1>{t('forbole')}</h1>
      <p>home page</p>
      <Example />
    </div>
  );
};

export default Home;
