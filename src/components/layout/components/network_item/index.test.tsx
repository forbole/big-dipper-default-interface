import React from 'react';
import { mount } from 'enzyme';
// import {
//   MobileNav,
//   DesktopNav,
//   Footer,
// } from 'big-dipper-internal-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import NetworkItem from '.';

describe('NetworkItem', () => {
  it('correctly renders Layout component', () => {
    expect(NetworkItem).toBeTruthy();
    const wrap = mount(BaseWrapper({
      component: <NetworkItem
        network={{
          name: 'hello world',
          links: [{
            chainId: '123',
            url: '',
            name: 'a chain',
          }],
          logo: '',
        }}
      />,
      theme: lightTheme,
    }));

    expect(wrap).not.toBeNull();
    expect(wrap.find('.logo-container')).toHaveLength(1);
    expect(wrap.find('.networks')).toHaveLength(1);
  });
});
