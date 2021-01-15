import React from 'react';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import { awaitActions } from '@tests/utils/await_actions';
import { CONSENSUS_MOCK_DATA } from '@tests/mocks';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import Consensus from '.';

describe('Consensus', () => {
  it('correctly renders component', async () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Consensus />,
          theme: lightTheme,
        }),
        mocks: CONSENSUS_MOCK_DATA,
      }),
    );

    await awaitActions({
      wrapper,
      time: 10,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.amount').last().text()).toEqual('1,400,123');
  });
});
