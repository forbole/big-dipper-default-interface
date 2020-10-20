import React from 'react';
import { useTranslation } from 'i18n';
import {
  Layout, MaxWidthContainer, MaxWidthContent,
} from '@components';
import Grid from '@material-ui/core/Grid';
import {
  createMuiTheme, MuiThemeProvider,
} from '@material-ui/core/styles';
import { useGetStyles } from './styles';
import { faq } from './utils';

const themeLocal = createMuiTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0, sm: 568, md: 760, lg: 1080, xl: 1200,
    },
  },
});

const Faq = () => {
  const { t } = useTranslation('faq');
  const { classes } = useGetStyles();

  const GridWithXXL = ({ 
    theme={themeLocal}

  }) => {
    // const xxlClass = `MuiGrid-grid-xxl-${xxl}`;
    return <Grid container spacing={2} />;
  };

  return (
    <Layout>
      <MaxWidthContainer>
        <MaxWidthContent className={classes.root}>
          <Grid container spacing={2}>
            {faq.map((x, i) => {
              return (
                <GridWithXXL
                  key={i}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={6}
                  xl={2}
                  xxl={1}
                >
                  <h2 className={classes.subTitle}>
                    {x.question}
                  </h2>
                  <p className={classes.paragraph}>
                    {x.ans}
                  </p>
                </GridWithXXL>
              );
            })}
          </Grid>

          <h1 className={classes.title}>
            {t('FAQ')}
          </h1>
          <p className={classes.context}>
            {t('context')}
            <a
              href="mailto:support@forbole.com"
              className={classes.desktopOnly}
            >
              {t('email')}
            </a>
          </p>
          <div className={classes.linkContainer}>
            <a
              href="mailto:support@forbole.com"
              style={{
                color: '#1D86FF',
              }}
            >
              {t('email')}
            </a>
          </div>
          <MuiThemeProvider theme={themeLocal}>
            <Grid container spacing={2}>
              {faq.map((x, i) => {
                return (
                  <Grid key={i} item xs={12} lg={6}>
                    <h2 className={classes.subTitle}>
                      {x.question}
                    </h2>
                    <p className={classes.paragraph}>
                      {x.ans}
                    </p>
                  </Grid>
                );
              })}
            </Grid>
          </MuiThemeProvider>
        </MaxWidthContent>
      </MaxWidthContainer>
    </Layout>
  );
};

export default Faq;
