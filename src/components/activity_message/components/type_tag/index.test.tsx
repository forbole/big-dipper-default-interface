import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import TypeTag from '.';

describe('TypeTag', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <TypeTag
          type="unknown"
          display="unknown"
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.type-tag__container')).toHaveLength(1);
  });
});
