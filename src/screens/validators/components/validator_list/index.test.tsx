import React from 'react';
import { mount } from 'enzyme';
import {
  Tab,
  Tabs,
} from '@material-ui/core';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { VALIDATOR_LIST_MOCK_DATA } from '@tests/mocks';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { lightTheme } from '@styles';
import {
  ValidatorListMobile, ValidatorListDesktop,
} from '@forbole/big-dipper-default-ui';
import ValidatorList from '.';

describe('ValidatorList', () => {
  it('correctly renders component', async () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <ValidatorList />,
          theme: lightTheme,
        }),
        mocks: VALIDATOR_LIST_MOCK_DATA,
      }),
    );

    await awaitActions({
      wrapper,
      time: 10,
    });

    expect(wrapper).not.toBeNull();
    expect(wrapper.find(ValidatorListMobile)).toHaveLength(1);
    expect(wrapper.find(ValidatorListDesktop)).toHaveLength(1);
    expect(wrapper.find(Tabs)).toHaveLength(1);
    expect(wrapper.find(Tab)).toHaveLength(2);
    expect(wrapper.find('.validator-list__active')).toHaveLength(1);
    expect(wrapper.find('.validator-list__inactive')).toHaveLength(0);

    wrapper.find(Tab).last().simulate('click');
    expect(wrapper.find('.validator-list__active')).toHaveLength(0);
    expect(wrapper.find('.validator-list__inactive')).toHaveLength(1);
  });
});
