import React from 'react';
import { mount } from 'enzyme';
import { ResponsiveContainer } from 'recharts';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { lightTheme } from '@styles';
import { ONLINE_VOTING_POWER_MOCK_DATA } from '@tests/mocks';
import OnlineVotingPower from '.';

describe('OnlineVotingPower', () => {
  it('correctly renders component', async () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <OnlineVotingPower />,
          theme: lightTheme,
        }),
        mocks: ONLINE_VOTING_POWER_MOCK_DATA,
      }),
    );

    await awaitActions({
      wrapper,
      time: 10,
    });

    expect(wrapper).not.toBeNull();
    expect(wrapper.find(ResponsiveContainer)).toHaveLength(1);
  });
});
