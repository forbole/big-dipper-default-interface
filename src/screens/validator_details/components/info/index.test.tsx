import React from 'react';
import { ValidatorInfo } from 'big-dipper-default-ui';
import { mount } from '@src/components/proposer/node_modules/enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import Info from '.';

describe('Info', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Info />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(ValidatorInfo)).toHaveLength(1);
  });
});
