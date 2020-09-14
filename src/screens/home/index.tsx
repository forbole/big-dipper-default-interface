import React from 'react';
import { useTranslation } from 'i18n';
import { Example, Layout } from '@components';
import Button from '@material-ui/core/Button';
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
    <Layout>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
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
    </Layout>
  );
};

export default Home;
