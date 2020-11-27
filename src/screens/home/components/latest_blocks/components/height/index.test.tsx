import React from 'react';
import Link from 'next/link';
import { mount } from '@src/components/header_bar_desktop/node_modules/enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import Height from '.';

describe('Height', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Height raw={3000} display="3,000" />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find('p').first().text()).toEqual('3,000');
  });
});
