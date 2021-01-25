import React from 'react';
import { ValidatorProfile } from 'big-dipper-default-ui';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { VALIDATOR_PROFILE_MOCK_DATA } from '@tests/mocks';
import { lightTheme } from '@styles';
import Profile from '.';

describe('Profile', () => {
  it('correctly renders component', async () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Profile />,
          theme: lightTheme,
        }),
        mocks: VALIDATOR_PROFILE_MOCK_DATA,
      }),
    );

    await awaitActions({
      wrapper,
      time: 10,
    });

    expect(wrapper).not.toBeNull();
    expect(wrapper.find(ValidatorProfile)).toHaveLength(1);
  });
});
