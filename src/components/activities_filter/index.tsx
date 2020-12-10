import React from 'react';
import {
  MenuItem,
  Select,
  InputBase,
  Typography,
} from '@material-ui/core';
import { getFilterLabels } from './utils';

const ActivitiesFilter = () => {
  const filterLabels = getFilterLabels();
  return (
    <Select
      className="content-header__select"
      displayEmpty
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        getContentAnchorEl: null,
      }}
      value={selectedFilter}
      renderValue={
                selectedFilter !== '' ? undefined : () => {
                  return (
                    <p className={classnames('select__placeholder')}>
                      {t('filerBy')}
                    </p>
                  );
                }
              }
      input={<InputBase />}
    >
      {filterLabels.map((x) => {
        return (
          <MenuItem
            key={x.key}
            onClick={() => handleOnFilterSelect(x)}
            value={x.key}
            className={classes.filterMenu}
          >
            <Typography variant="inherit" noWrap>
              {t(x.display)}
            </Typography>
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default ActivitiesFilter;
