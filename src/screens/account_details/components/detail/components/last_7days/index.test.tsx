import React from 'react';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import Last7Days from '.';
import { TrendChartdata } from '../../utils';

describe('Last7Days', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Last7Days
          data={TrendChartdata.data}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Last7Days)).toHaveLength(1);
  });
});
