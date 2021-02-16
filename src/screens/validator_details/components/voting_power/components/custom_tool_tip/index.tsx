import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { CustomToolTipProps } from './types';
import { useGetStyles } from './styles';

/**
 * Custom tool tips for rechart graphs
 */
const CustomToolTip = (props:CustomToolTipProps) => {
  const {
    active,
    payload,
  } = props;

  const { t } = useTranslation('home');
  const { classes } = useGetStyles();

  if (payload && active) {
    const { payload: data } = payload?.[0];
    return (
      <div className={classnames(classes.root)}>
        <p className="custom-tool-tip__label">{t('height')}</p>
        <p className="custom-tool-tip__value">{numeral(data?.height).format('0,0')}</p>
        <br />
        <p className="custom-tool-tip__label">{t('votingPower')}</p>
        <p className="custom-tool-tip__value">{numeral(data?.votingPower).format('0,0')}</p>
      </div>
    );
  }

  return null;
};

export default CustomToolTip;
