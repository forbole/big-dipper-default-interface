import React from 'react';
import { mount } from 'enzyme';
import { DesktopHeaderBar } from 'big-dipper-internal-ui';
import { HeaderBar } from '@components';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { HEADER_BAR_MOCK } from '@tests/utils/mock_data';

describe('HeaderBar', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: <HeaderBar title="hello world" />,
        mocks: HEADER_BAR_MOCK,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(DesktopHeaderBar)).toHaveLength(1);
  });
});
