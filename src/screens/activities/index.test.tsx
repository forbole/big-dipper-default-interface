import React from 'react';
import { mount } from 'enzyme';
import { LatestActivities } from '@forbole/big-dipper-default-ui';
import Activities from '@screens/activities';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import {
  LAYOUT_MOCK_DATA,
  HEADER_BAR_MOCK,
  DATA_BLOCKS_HEADER_MOCK,
  LATEST_ACTIVITIES_MOCK_DATA,
  LATEST_ACTIVITY_MOCK_DATA,
  CHAIN_ID_MOCK_DATA,
} from '@tests/mocks';
import { lightTheme } from '@styles';
import {
  Layout,
  DataBlocksHeader,
} from '@components';

describe('Activities', () => {
  it('correctly renders Home component with hooks', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Activities />,
          theme: lightTheme,
        }),
        mocks: [
          ...HEADER_BAR_MOCK,
          ...DATA_BLOCKS_HEADER_MOCK,
          ...LATEST_ACTIVITY_MOCK_DATA,
          ...CHAIN_ID_MOCK_DATA,
          ...LATEST_ACTIVITIES_MOCK_DATA({
            limit: 10,
            offset: 1,
          }),
        ],
      }),
    );
    await awaitActions({
      wrapper,
      time: 10,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(DataBlocksHeader)).toHaveLength(1);
    expect(wrapper.find(LatestActivities)).toHaveLength(1);
  });
});
