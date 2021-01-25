import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import Link from 'next/link';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { lightTheme } from '@styles';
import AddressDisplay from '.';

describe('AvatarDisplayHelper', () => {
  it('correctly renders AvatarDisplayHelper', async () => {
    const wrapper = mount(
      BaseWrapper({
        component: <AddressDisplay
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
    expect(wrapper.find(Link)).toHaveLength(1);
  });

  it('No link', async () => {
    const wrapper = mount(
      BaseWrapper({
        component: <AddressDisplay
          address="arandomaddress"
          link={false}
        />,
        theme: lightTheme,
      }),
    );

    await awaitActions({
      wrapper,
      time: 5,
    });

    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Link)).toHaveLength(0);
  });
});
