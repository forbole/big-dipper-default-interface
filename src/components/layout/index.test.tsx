import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import {
  MobileNav,
  DesktopNav,
  Footer,
} from 'big-dipper-internal-ui';
import { Layout } from '@components';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { lightTheme } from '@styles';

describe('Layout', () => {
  it('correctly renders Layout component', async () => {
    expect(Layout).toBeTruthy();
    const wrap = mount(BaseWrapper({
      component:
  <Layout>
    <h1>Hello World</h1>
  </Layout>,
      theme: lightTheme,
    }));

    await awaitActions({
      wrapper: wrap,
      time: 10,
    });
    expect(wrap).not.toBeNull();
    expect(wrap.find('h1')).toHaveLength(1);
    expect(wrap.find('.children-wrapper')).toHaveLength(1);
    expect(wrap.find(MobileNav)).toHaveLength(1);
    expect(wrap.find(DesktopNav)).toHaveLength(1);
    expect(wrap.find(Footer)).toHaveLength(1);
  });
});
