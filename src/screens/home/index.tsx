import React from 'react';
import { useTranslation } from 'i18n';
import { Example } from '@components';
import { useHomeHook } from './hooks';

const Home = () => {
  const { t } = useTranslation('common');
  const {
    data,
    loading,
    error,
  } = useHomeHook();

  if (error) {
    console.log('there is an error');
  }

  return (
    <div>
      <h1>{t('bigDipper')}</h1>
      <h1>{t('forbole')}</h1>
      <p>
        home page on port
      </p>
      {!loading && <h3>done loading!</h3>}
      {!loading && data.rates.map((x) => (
        <p key={x.currency}>{x.currency}</p>
      ))}
      <Example />
    </div>
  );
};

export default Home;
