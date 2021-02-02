import React from 'react';
import { mount } from 'enzyme';
import {
  OnlineVotingPower as OnlineVotingPowerUi, SelectTabs,
} from '@forbole/big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import OnlineVotingPower from '.';

describe('OnlineVotingPower', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <OnlineVotingPower />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(SelectTabs)).toHaveLength(1);
    expect(wrapper.find(OnlineVotingPowerUi)).toHaveLength(1);
  });
});
