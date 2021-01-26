import React from 'react';
import { ValidatorInfo } from 'big-dipper-default-ui';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { VALIDATOR_INFO_MOCK_DATA } from '@tests/mocks';
import { lightTheme } from '@styles';
import Info from '.';

describe('Info', () => {
  it('correctly renders component', async () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Info />,
          theme: lightTheme,
        }),
        mocks: VALIDATOR_INFO_MOCK_DATA,
      }),
    );

    await awaitActions({
      wrapper,
      time: 10,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(ValidatorInfo)).toHaveLength(1);
  });
});
