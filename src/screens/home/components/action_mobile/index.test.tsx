import React from 'react';
import Link from 'next/link';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import ActionMobile from '.';

describe('ActionMobile', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <ActionMobile url="/" />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
