import React from 'react';
import { mount } from '@src/components/proposer/node_modules/enzyme';
import {
  ValidatorStakingMobile,
  ValidatorStakingDesktop,
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
    expect(wrapper.find(ValidatorStakingDesktop)).toHaveLength(1);
    expect(wrapper.find(ValidatorStakingMobile)).toHaveLength(1);
  });
});
