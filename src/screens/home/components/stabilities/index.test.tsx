import React from 'react';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { STABILITIES_MOCK_DATA } from '@tests/mocks';
import StabilitiesItem from '.';

describe('Stabilities', () => {
  it('correctly renders component', async () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <StabilitiesItem />,
          theme: lightTheme,
        }),
        mocks: STABILITIES_MOCK_DATA,
      }),
    );

    await awaitActions({
      wrapper,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.amount').last().text()).toEqual('2,060.04daric');
  });
});
