import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Typography,
  Button,
  List,
  ListItem,
} from '@material-ui/core';
import { useGetStyles } from './styles';
import {
  footerLinks, socialMediaLinks,
} from './utils';

export const Footer = () => {
  const { t } = useTranslation(['footer', 'common']);
  const { classes } = useGetStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <div>
          <img
            className={classes.logo}
            src="images/big-dipper-logo.png"
            alt="big dipper logo"
          />
          <Typography variant="body2">
            {t('common:cosmosBlockExplorer')}
          </Typography>
          <Typography
            variant="body2"
            className={classnames(classes.tabletAndUp, classes.copyright)}
          >
            {t('copyright')}
          </Typography>
        </div>
        <Button
          className={classnames(classes.mobileOnly)}
          variant="contained"
          color="primary"
          size="small"
        >
          {t('donate')}
        </Button>
      </div>

      <div className={classes.listContainer}>
        <List className={classes.list}>
          {footerLinks.map((x, i) => {
            return (
              <ListItem key={x.key} className={classes.listItem}>
                {t(x.key)}
                {i !== footerLinks.length - 1 && (
                  <span>|</span>
                )}
              </ListItem>
            );
          })}
        </List>
        <div className={classes.playStore}>
          play store icons
        </div>
      </div>
      <div className={classes.socialMediaContainer}>
        {socialMediaLinks.map((x) => (
          <a
            href={x.url}
            target="_blank"
            rel="noreferrer"
            className={classes.socialMediaContent}
            key={x.url}
          >
            <x.component />
          </a>
        ))}
        <Button
          className={classnames(classes.tabletAndUp)}
          variant="contained"
          color="primary"
          size="small"
        >
          {t('donate')}
        </Button>
      </div>
    </div>
  );
};

export default Footer;
