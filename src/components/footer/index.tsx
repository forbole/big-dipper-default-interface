import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
} from '@material-ui/core';
import { useGetStyles } from './styles';
import { footerLinks } from './utils';

export const Footer = () => {
  const { t } = useTranslation(['footer', 'common']);
  const { classes } = useGetStyles();
  return (
    <div className={classes.root}>
      <div className={classes.mainContent}>
        <div className={classes.logoContainer}>
          <div>
            <div>logo</div>
            <Typography variant="body2">
              {t('common:cosmosBlockExplorer')}
            </Typography>
            <Typography variant="body2" className={classes.tabletAndUp}>
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
          <Typography className={classes.socialMediaContent}>
            social media
          </Typography>
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
    </div>
  );
};

export default Footer;
