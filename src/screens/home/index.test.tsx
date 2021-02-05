import React from 'react';
import { mount } from 'enzyme';
import Home from '@screens/home';
import {
  LatestBlocks,
  Stabilities,
  Consensus,
  OnlineVotingPower,
} from '@screens/home/components';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { lightTheme } from '@styles';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
} from '@components';
import {
  LAYOUT_MOCK_DATA,
  HEADER_BAR_MOCK,
  DATA_BLOCKS_HEADER_MOCK,
  STABILITIES_MOCK_DATA,
  LATEST_BLOCKS_MOCK_DATA,
  LATEST_ACTIVITIES_MOCK_DATA,
  ONLINE_VOTING_POWER_MOCK_DATA,
} from '@tests/mocks';

describe('Home', () => {
  it('it renders', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Home />,
          theme: lightTheme,
        }),
        mocks: [
          ...HEADER_BAR_MOCK,
          ...DATA_BLOCKS_HEADER_MOCK,
          ...STABILITIES_MOCK_DATA,
          ...ONLINE_VOTING_POWER_MOCK_DATA,
          ...LATEST_BLOCKS_MOCK_DATA(),
          ...LATEST_ACTIVITIES_MOCK_DATA({
            offset: 0,
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
    expect(wrapper.find(Stabilities)).toHaveLength(1);
    expect(wrapper.find(Consensus)).toHaveLength(1);
    expect(wrapper.find(HeaderBarDesktop)).toHaveLength(1);
    expect(wrapper.find(LatestBlocks)).toHaveLength(1);
    expect(wrapper.find(OnlineVotingPower)).toHaveLength(1);
  });
});
