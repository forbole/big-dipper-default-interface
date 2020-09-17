import React from 'react';
import NextLink from 'next/link';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Typography,
  Button,
  List,
  ListItem,
  Link,
} from '@material-ui/core';
import { useGetStyles } from './styles';
import {
  footerLinks,
  socialMediaLinks,
  getStoreBadge,
} from './utils';

export const Footer = () => {
  const { t } = useTranslation(['footer', 'common']);
  const { classes } = useGetStyles();
  const storeBadges = getStoreBadge(classes);

  return (
    <div
      className={classes.root}
    >
      <div
        className={classes.logoContainer}
      >
        <div>
          <Link
            href="/"
          >
            <a>
              <img
                className={classes.logo}
                src="images/big-dipper-logo.png"
                alt="big dipper logo"
              />
            </a>
          </Link>
          <Typography
            variant="body2"
          >
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

      <div
        className={classes.listContainer}
      >
        <List
          className={classes.list}
        >
          {footerLinks.map((x, i) => {
            return (
              <ListItem
                key={x.key}
                className={classes.listItem}
              >
                <NextLink
                  href={`${x.url}`}
                >
                  <Link
                    href={`${x.url}`}
                    color="inherit"
                    underline="none"
                  >
                    <a>
                      {t(x.key)}
                    </a>
                  </Link>
                </NextLink>
                {i !== footerLinks.length - 1 && (
                  <span>|</span>
                )}
              </ListItem>
            );
          })}
        </List>
        <div
          className={classes.playStore}
        >
          {storeBadges.map((x) => (
            <a
              className={x.className}
              href={x.url}
              target="_blank"
              rel="noreferrer"
              key={x.alt}
            >
              <img
                src={x.image}
                alt={x.alt}
                title={x.alt}
              />
            </a>
          ))}
        </div>
      </div>
      <div
        className={classes.socialMediaContainer}
      >
        {socialMediaLinks.map((x, i) => (
          <a
            href={x.url}
            target="_blank"
            rel="noreferrer"
            className={classes.socialMediaContent}
            key={i}
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
