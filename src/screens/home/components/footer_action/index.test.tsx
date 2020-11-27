import React from 'react';
import Link from 'next/link';
import { mount } from '@src/components/header_bar_desktop/node_modules/enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import FooterAction from '.';

describe('FooterAction', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <FooterAction url="/" />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
