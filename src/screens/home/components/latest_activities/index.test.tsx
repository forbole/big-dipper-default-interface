import React from 'react';
import { mount } from 'enzyme';
import {
  TablePreviewWrapper,
  LatestActivities as LatestActivitiesComponent,
} from 'big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import LatestActivities from '.';

describe('LatestActivities', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <LatestActivities />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(LatestActivitiesComponent)).toHaveLength(1);
    expect(wrapper.find(TablePreviewWrapper)).toHaveLength(1);
  });
});
