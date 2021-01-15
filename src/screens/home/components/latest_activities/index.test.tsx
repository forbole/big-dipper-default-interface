import React from 'react';
import { mount } from 'enzyme';
import {
  TablePreviewWrapper,
  LatestActivities as LatestActivitiesComponent,
} from 'big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { LATEST_ACTIVITIES_MOCK_DATA } from '@tests/mocks';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { lightTheme } from '@styles';
import LatestActivities from '.';

describe('LatestActivities', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <LatestActivities />,
          theme: lightTheme,
        }),
        mocks: LATEST_ACTIVITIES_MOCK_DATA({
          offset: 0,
        }),
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(LatestActivitiesComponent)).toHaveLength(1);
    expect(wrapper.find(TablePreviewWrapper)).toHaveLength(1);
  });
});
