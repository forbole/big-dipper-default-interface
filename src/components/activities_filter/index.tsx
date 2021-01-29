/* eslint-disable */
import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import {
  MenuItem,
  Select,
  InputBase,
  Typography,
} from '@material-ui/core';
import { getFilterLabels } from './utils';
import { useActivitiesFilterHook } from './hooks';
import { useGetStyles } from './styles';
import { ActivitiesFilterProps } from './types';

const ActivitiesFilter = (props:ActivitiesFilterProps) => {
  // const {
    // callback,
    // className,
  // } = props;
  // const filterLabels = getFilterLabels();
  // const { t } = useTranslation(['activities', 'common']);
  // const {
  //   handleOnFilterSelect,
  //   selectedFilter,
  // } = useActivitiesFilterHook(callback);
  // const { classes } = useGetStyles();

  return <></>;

  // return (
  //   <Select
  //     className={classnames(classes.select, className, 'activities-filter-select')}
  //     displayEmpty
  //     MenuProps={{
  //       anchorOrigin: {
  //         vertical: 'bottom',
  //         horizontal: 'left',
  //       },
  //       transformOrigin: {
  //         vertical: 'top',
  //         horizontal: 'left',
  //       },
  //       getContentAnchorEl: null,
  //     }}
  //     value={selectedFilter}
  //     renderValue={
  //               selectedFilter !== '' ? undefined : () => {
  //                 return (
  //                   <p className={classnames('select__placeholder')}>
  //                     {t('filerBy')}
  //                   </p>
  //                 );
  //               }
  //             }
  //     input={<InputBase />}
  //   >
  //     {filterLabels.map((x) => {
  //       return (
  //         <MenuItem
  //           key={x.key}
  //           onClick={() => handleOnFilterSelect(x)}
  //           value={x.key}
  //           className={classes.root}
  //         >
  //           <Typography variant="inherit" noWrap>
  //             {t(x.display)}
  //           </Typography>
  //         </MenuItem>
  //       );
  //     })}
  //   </Select>
  // );
};

export default ActivitiesFilter;
