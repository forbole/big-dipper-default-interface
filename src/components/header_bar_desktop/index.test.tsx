import React from 'react';
import { mount } from 'enzyme';
import { HeaderBarDesktopDesktop } from 'big-dipper-internal-ui';
import { HeaderBarDesktop } from '@components';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { HEADER_BAR_MOCK } from '@tests/utils/mock_data';

describe('HeaderBarDesktop', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: <HeaderBarDesktop title="hello world" />,
        mocks: HEADER_BAR_MOCK,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(HeaderBarDesktopDesktop)).toHaveLength(1);
  });
});
