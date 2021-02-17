import React from 'react';
import { mount } from 'enzyme';
import {
  TablePaginated,
  UserStakingMobile,
} from '@forbole/big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { USER_STAKING_MOCK_DATA } from '@tests/mocks';
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
        mocks: USER_STAKING_MOCK_DATA,
      }),
    );

    await awaitActions({
      wrapper,
      time: 500,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(UserStakingMobile)).toHaveLength(1);
    expect(wrapper.find(TablePaginated)).toHaveLength(1);
    expect(wrapper.find('.table-default')).toHaveLength(1);
    expect(wrapper.find('.commission').first().text()).toEqual('10.00%');
  });
});
