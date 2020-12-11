import React from 'react';
import { mount } from 'enzyme';
import {
  LatestActivitiesMobile,
  LatestActivitiesDesktop,
} from 'big-dipper-default-ui';
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
    expect(wrapper.find(LatestActivitiesMobile)).toHaveLength(1);
    expect(wrapper.find(LatestActivitiesDesktop)).toHaveLength(1);
    expect(wrapper.find(ActivitiesFilter)).toHaveLength(1);
    expect(wrapper.find(InfiniteLoader)).toHaveLength(1);
  });
});