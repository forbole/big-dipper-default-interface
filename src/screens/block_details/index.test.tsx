import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { lightTheme } from '@styles';
import { Layout } from '@components';
import {
  LAYOUT_MOCK_DATA,
  HEADER_BAR_MOCK,
  DATA_BLOCKS_HEADER_MOCK,
  LATEST_ACTIVITIES_MOCK_DATA,
  BLOCK_DETAILS_MOCK_DATA,
} from '@tests/mocks';
import BlockDetails from '.';
import { Activities } from './components';

describe('BlockDetails', () => {
  it('correctly renders Home component with hooks', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <BlockDetails />,
          theme: lightTheme,
        }),
        mocks: [
          ...HEADER_BAR_MOCK,
          ...DATA_BLOCKS_HEADER_MOCK,
          ...BLOCK_DETAILS_MOCK_DATA,
          ...LATEST_ACTIVITIES_MOCK_DATA({
            height: null,
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
    expect(wrapper.find(Activities)).toHaveLength(1);
  });
});
