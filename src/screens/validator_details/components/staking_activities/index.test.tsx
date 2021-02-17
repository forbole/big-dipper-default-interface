import React from 'react';
import { mount } from 'enzyme';
import {
  ValidatorStakingMobile,
  ValidatorStakingDesktop,
} from '@forbole/big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { VALIDATOR_STAKING_MOCK_DATA } from '@tests/mocks';
import { lightTheme } from '@styles';
import StakingActivities from '.';

describe('StakingActivities', () => {
  it('correctly renders component', async () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <StakingActivities />,
          theme: lightTheme,
        }),
        mocks: VALIDATOR_STAKING_MOCK_DATA,
      }),
    );

    await awaitActions({
      wrapper,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(ValidatorStakingDesktop)).toHaveLength(1);
    expect(wrapper.find(ValidatorStakingMobile)).toHaveLength(1);
  });
});
