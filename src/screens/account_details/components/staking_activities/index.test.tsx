import React from 'react';
import { mount } from 'enzyme';
import {
  TablePaginated,
  UserStakingMobile,
} from 'big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import StakingActivities from '.';

describe('StakingActivities', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <StakingActivities />,
        theme: lightTheme,
      }),
    );

    expect(wrapper).not.toBeNull();
    expect(wrapper.find(UserStakingMobile)).toHaveLength(1);
    expect(wrapper.find(TablePaginated)).toHaveLength(1);
  });
});
