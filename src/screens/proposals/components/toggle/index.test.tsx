import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import Toggle from '.';

describe('Toggle', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Toggle
          isToggled={false}
          showAll="Show All"
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('h4').text()).toEqual('Show All');
    expect(wrapper.find(Toggle)).toHaveLength(1);
  });
});
