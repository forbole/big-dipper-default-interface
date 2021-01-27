import React from 'react';
import { useTranslation } from 'i18n';
import { Footer } from 'big-dipper-internal-ui';
import { useGetStyles } from './styles';
import {
  getSocialMediaComponents, getFooterLinkComponents,
} from './utils';
import { useFooterHooks } from './hooks';

const FooterComponent = () => {
  const { classes } = useGetStyles();
  const { t } = useTranslation(['footer', 'common']);
  const socialMediaComponents = getSocialMediaComponents();
  const footerLinks = getFooterLinkComponents(t);
  const { returnToHome } = useFooterHooks();
  return (
    <Footer
      className={classes.root}
      bigDipperLogo={{
        alt: 'big dipper logo',
        onClick: returnToHome,
      }}
      blockExplorerText={t('common:blockExplorer')}
      copyrightText="Copyright © Forbole 2020"
      donate={{
        text: t('donate'),
        onClick: () => { console.log('donate clicked'); },
      }}
      links={{
        components: footerLinks,
        decorator: '|',
      }}
      socialMediaComponents={socialMediaComponents}
    />
  );
};

export default FooterComponent;
