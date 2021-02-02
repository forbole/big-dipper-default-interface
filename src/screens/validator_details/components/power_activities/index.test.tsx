import React from 'react';
import { mount } from 'enzyme';
import { Tab } from '@material-ui/core';
import {
  LatestActivities,
  PowerEvents,
} from '@forbole/big-dipper-default-ui';
import {
  ActivitiesFilter,
  InfiniteLoader,
} from '@components';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import PowerActivities from '.';

describe('PowerActivities', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <PowerActivities />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(LatestActivities)).toHaveLength(0);
    expect(wrapper.find(ActivitiesFilter)).toHaveLength(1);
    expect(wrapper.find(InfiniteLoader)).toHaveLength(1);
    expect(wrapper.find(PowerEvents)).toHaveLength(1);

    wrapper.find(Tab).last().simulate('click');
    expect(wrapper.find(LatestActivities)).toHaveLength(1);
    expect(wrapper.find(PowerEvents)).toHaveLength(0);
  });
});
