import React from 'react';
import { mount } from 'enzyme';
import { ValidatorBlocks } from 'big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import MissedBlocks from '.';

describe('PowerActivities', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <MissedBlocks />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(ValidatorBlocks)).toHaveLength(1);
  });
});