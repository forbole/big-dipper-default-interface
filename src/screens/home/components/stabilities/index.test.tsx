import React from 'react';
import Link from 'next/link';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import StabilitiesItem from './index';

describe('Stabilities', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <StabilitiesItem />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('h1').first().text()).toEqual('Stabilities');
  });
});
