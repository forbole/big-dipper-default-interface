import React from 'react';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import { TrendChartdata } from '../../utils';
import TrendChart from '.';

describe('TrendChart', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <TrendChart
          {...TrendChartdata}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(TrendChart)).toHaveLength(1);
  });
});
