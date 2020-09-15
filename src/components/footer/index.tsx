import React from 'react';
import { useTranslation } from 'i18n';
import {
  Box,
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';
import { footerLinks } from './utils';

export const Footer = () => {
  const { t } = useTranslation(['footer', 'common']);
  const {
    FooterCSS,
    LogoContainerCSS,
    LinkItemCSS,
    LinkListCSS,
    LinkSpacingCSS,
    MainFooterContentCSS,
    MobileDonateButtonCSS,
    DonateButtonCSS,
    SocialMediaCSS,
    SocialMediaContainerCSS,
    LinkContainerCSS,
    PlayStoreCSS,
  } = useStyles();
  return (
    <FooterCSS>
      <MainFooterContentCSS>
        <LogoContainerCSS>
          <Box>
            <div>logo</div>
            <Typography variant="body2">{t('common:cosmosBlockExplorer')}</Typography>
          </Box>
          <MobileDonateButtonCSS
            variant="contained"
            color="primary"
            size="small"
          >
            {t('donate')}
          </MobileDonateButtonCSS>
        </LogoContainerCSS>
        <LinkContainerCSS>
          <LinkListCSS>
            {footerLinks.map((x, i) => {
              return (
                <LinkItemCSS key={x.key}>
                  {t(x.key)}
                  {i !== footerLinks.length - 1 && (
                  <LinkSpacingCSS component="span">|</LinkSpacingCSS>
                  )}
                </LinkItemCSS>
              );
            })}
          </LinkListCSS>
          <PlayStoreCSS>
            play store icons
          </PlayStoreCSS>
        </LinkContainerCSS>
        <SocialMediaContainerCSS>
          <SocialMediaCSS>social media</SocialMediaCSS>
          <DonateButtonCSS
            variant="contained"
            color="primary"
            size="small"
          >
            {t('donate')}
          </DonateButtonCSS>
        </SocialMediaContainerCSS>
      </MainFooterContentCSS>
      <Typography variant="body2">{t('copyright')}</Typography>
    </FooterCSS>
  );
};

export default Footer;
