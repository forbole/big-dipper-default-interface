import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { LatestActivities } from 'big-dipper-default-ui';
import {
  ActivitiesFilter,
  InfiniteLoader,
} from '@components';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import Activities from '.';

describe('NotFound', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Activities />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(LatestActivities)).toHaveLength(1);
    expect(wrapper.find(ActivitiesFilter)).toHaveLength(1);
    expect(wrapper.find(InfiniteLoader)).toHaveLength(1);
  });
});
