import React from 'react';
import { useTranslation } from 'i18n';
import { Footer } from 'big-dipper-internal-ui';
import { useGetStyles } from './styles';
import {
  getSocialMediaComponents, getStoreBadgeComponents, getFooterLinkComponents,
} from './utils';

const FooterComponent = () => {
  const { classes } = useGetStyles();
  const { t } = useTranslation(['footer', 'common']);
  const socialMediaComponents = getSocialMediaComponents();
  const storeBadgesComponents = getStoreBadgeComponents();
  const footerLinks = getFooterLinkComponents(t);

  return (
    <span className={classes.root}>
      <Footer
        bigDipperLogo={{
          alt: 'big dipper logo',
        }}
        blockExplorerText="Cosmos Block Explorer"
        copyrightText="Copyright © Forbole 2020"
        donate={{
          text: t('donate'),
          url: '#',
        }}
        links={{
          components: footerLinks,
          decorator: '|',
        }}
        socialMediaComponents={socialMediaComponents}
        storeBadgesComponents={storeBadgesComponents}
      />
    </span>
  );
};

export default FooterComponent;
