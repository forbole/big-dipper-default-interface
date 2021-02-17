import React from 'react';
import { mount } from 'enzyme';
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
    });

    expect(wrapper).not.toBeNull();
    expect(wrapper.find(ValidatorDisplay)).toHaveLength(1);
  });
});
