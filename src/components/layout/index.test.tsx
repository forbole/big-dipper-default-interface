import React from 'react';
import { mount } from 'enzyme';
import {
  MobileNav,
  DesktopNav,
  Footer,
} from '@forbole/big-dipper-internal-ui';
import { Layout } from '@components';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { lightTheme } from '@styles';
import { CHAIN_ID_MOCK_DATA } from '@tests/mocks';

describe('Layout', () => {
  it('correctly renders Layout component', async () => {
    expect(Layout).toBeTruthy();

    const wrap = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component:
  <Layout>
    <h1>Hello World</h1>
  </Layout>,
          theme: lightTheme,
        }),
        mocks: CHAIN_ID_MOCK_DATA,
      }),
    );

    await awaitActions({
      wrapper: wrap,
      time: 10,
    });
    expect(wrap).not.toBeNull();
    expect(wrap.find('h1')).toHaveLength(1);
    expect(wrap.find('.children-wrapper')).toHaveLength(1);
    expect(wrap.find('.network-value').first().text()).toEqual('morpheus-13001');
    expect(wrap.find(MobileNav)).toHaveLength(1);
    expect(wrap.find(DesktopNav)).toHaveLength(1);
    expect(wrap.find(Footer)).toHaveLength(1);
  });
});
