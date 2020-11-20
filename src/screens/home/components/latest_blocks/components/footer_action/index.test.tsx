import React from 'react';
import Link from 'next/link';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import FooterAction from '.';

describe('FooterAction', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <FooterAction />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
