import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import Vote from '.';

describe('Vote', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Vote />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Vote)).toHaveLength(1);
  });
});
