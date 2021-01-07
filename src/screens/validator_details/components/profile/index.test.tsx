import React from 'react';
import { ValidatorProfile } from 'big-dipper-default-ui';
import { mount } from '@src/components/proposer/node_modules/enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import Profile from '.';

describe('Profile', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Profile />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(ValidatorProfile)).toHaveLength(1);
  });
});
