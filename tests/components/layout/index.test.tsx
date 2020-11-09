import React from 'react';
import { mount } from 'enzyme';
import {
  MobileNav,
  DesktopNav,
  Footer,
} from 'big-dipper-internal-ui';
import { Layout } from '@components';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';

describe('Layout', () => {
  it('correctly renders Layout component', () => {
    expect(Layout).toBeTruthy();
    const wrap = mount(BaseWrapper({
      component:
  <Layout>
    <h1>Hello World</h1>
  </Layout>,
      theme: lightTheme,
    }));

    expect(wrap).not.toBeNull();
    expect(wrap.find('h1')).toHaveLength(1);
    expect(wrap.find('.children-wrapper')).toHaveLength(1);
    expect(wrap.find(MobileNav)).toHaveLength(1);
    expect(wrap.find(DesktopNav)).toHaveLength(1);
    expect(wrap.find(Footer)).toHaveLength(1);
  });
});
