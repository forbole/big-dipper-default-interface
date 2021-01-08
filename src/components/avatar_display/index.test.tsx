import React from 'react';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import Jazzicon from 'react-jazzicon';
import { lightTheme } from '@styles';
import AvatarDisplayHelper from '.';

describe('AvatarDisplayHelper', () => {
  it('correctly renders component', async () => {
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
    expect(wrapper.find(Jazzicon)).toHaveLength(1);
  });
});
