import React from 'react';
import { mount } from 'enzyme';
import {
  UserInfo,
  InfoPopover,
} from '@forbole/big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { USERINFO_MOCK_DATA } from '@tests/mocks';
import Detail from '.';

describe('Detail', () => {
  it('correctly renders component', async () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Detail />,
          theme: lightTheme,
        }),
        mocks: USERINFO_MOCK_DATA,
      }),
    );
    await awaitActions({
      wrapper,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(UserInfo)).toHaveLength(1);
    expect(wrapper.find(InfoPopover)).toHaveLength(1);
    expect(wrapper.find('.totalDollar').first().find('h1')).toHaveLength(1);
    expect(wrapper.find('.totalDollar').first().find('h1').text()).toEqual('3.00 DARIC');
  });
});
