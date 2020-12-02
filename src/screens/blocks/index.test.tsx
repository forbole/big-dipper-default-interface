import React from 'react';
import { mount } from 'enzyme';
import Blocks from '@screens/blocks';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { lightTheme } from '@styles';
import {
  Layout,
  DataBlocksHeader,
  HeaderBarDesktop,
  HeaderBarMobile,
} from '@components';
import {
  LAYOUT_MOCK_DATA, HEADER_BAR_MOCK, DATA_BLOCKS_HEADER_MOCK,
} from '@tests/utils/mock_data';

describe('Blocks', () => {
  it('it renders', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    expect(Blocks).toBeTruthy();
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Blocks />,
          theme: lightTheme,
        }),
        mocks: [...HEADER_BAR_MOCK, ...DATA_BLOCKS_HEADER_MOCK],
      }),
    );
    await awaitActions({
      wrapper,
      time: 10,
    });
    expect(wrapper).not.toBeNull();
  });

  it('correctly renders Home component with hooks', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Blocks />,
          theme: lightTheme,
        }),
        mocks: [...HEADER_BAR_MOCK, ...DATA_BLOCKS_HEADER_MOCK],
      }),
    );
    await awaitActions({
      wrapper,
      time: 10,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find('.blocks-content__header--desktop')).toHaveLength(1);
    expect(wrapper.find(DataBlocksHeader)).toHaveLength(1);
    expect(wrapper.find(HeaderBarDesktop)).toHaveLength(1);
    expect(wrapper.find(HeaderBarMobile)).toHaveLength(1);
  });
});
