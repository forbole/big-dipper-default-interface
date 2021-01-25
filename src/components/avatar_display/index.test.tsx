import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { lightTheme } from '@styles';
import AvatarDisplayHelper from '.';
import {
  UserDisplay, ValidatorDisplay,
} from './components';

describe('AvatarDisplayHelper', () => {
  it('correctly renders UserDisplay', async () => {
    const wrapper = mount(
      BaseWrapper({
        component: <AvatarDisplayHelper
          identity="1234123"
          display="forbole"
          address="arandomaddress"
        />,
        theme: lightTheme,
      }),
    );

    await awaitActions({
      wrapper,
      time: 5,
    });

    expect(wrapper).not.toBeNull();
    expect(wrapper.find(UserDisplay)).toHaveLength(1);
  });

  it('correctly renders ValidatorDisplay', async () => {
    const wrapper = mount(
      BaseWrapper({
        component: <AvatarDisplayHelper
          identity="1234123"
          display="forbole"
          address="desmosvalcons123"
        />,
        theme: lightTheme,
      }),
    );

    await awaitActions({
      wrapper,
      time: 5,
    });

    expect(wrapper).not.toBeNull();
    // because it doesnt exist in our address book
    expect(wrapper.find(ValidatorDisplay)).toHaveLength(0);
  });
});
