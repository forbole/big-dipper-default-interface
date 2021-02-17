import React from 'react';
import { mount } from 'enzyme';
import { LatestActivities } from '@forbole/big-dipper-default-ui';
import { ActivitiesFilter } from '@components';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { awaitActions } from '@tests/utils/await_actions';
import { lightTheme } from '@styles';
import { LATEST_ACTIVITIES_MOCK_DATA } from '@tests/mocks';
import Activities from '.';

describe('NotFound', () => {
  it('correctly renders component', async () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Activities />,
          theme: lightTheme,
        }),
        mocks: [
          ...LATEST_ACTIVITIES_MOCK_DATA({
            height: null,
          }),
        ],
      }),
    );

    await awaitActions({
      wrapper,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(LatestActivities)).toHaveLength(1);
    expect(wrapper.find(ActivitiesFilter)).toHaveLength(1);
  });
});
