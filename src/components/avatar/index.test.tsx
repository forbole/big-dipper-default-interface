import React from 'react';
import Jazzicon from 'react-jazzicon';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { lightTheme } from '@styles';
import AvatarHelper from '.';
import { Validator } from './components';

describe('AvatarDisplayHelper', () => {
  it('correctly renders UserDisplay', async () => {
    const wrapper = mount(
      BaseWrapper({
        component: <AvatarHelper
          address="arandomaddress"
        />,
        theme: lightTheme,
      }),
    );

    await awaitActions({
      wrapper,
    });

    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Jazzicon)).toHaveLength(1);
  });

  it('Works if role is validator', async () => {
    const wrapper = mount(
      BaseWrapper({
        component: <AvatarHelper
          address="desmosvaloperarandomaddress"
        />,
        theme: lightTheme,
      }),
    );

    await awaitActions({
      wrapper,
    });

    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Validator)).toHaveLength(1);
  });
});
