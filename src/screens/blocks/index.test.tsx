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
  LAYOUT_MOCK_DATA,
  HEADER_BAR_MOCK,
  DATA_BLOCKS_HEADER_MOCK,
  LATEST_BLOCK_MOCK_DATA,
  LATEST_BLOCKS_MOCK_DATA,
  CHAIN_ID_MOCK_DATA,
} from '@tests/mocks';

describe('Blocks', () => {
  it('correctly renders Home component with hooks', async () => {
    mockedAxios?.get?.mockImplementation((url) => {
      if (url.includes('keybase.io')) {
        return (
          Promise.resolve({
            status: {
              code: 0,
            },
            them: [],
          })
        );
      }
      return (
        Promise.resolve(LAYOUT_MOCK_DATA)
      );
    });
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Blocks />,
          theme: lightTheme,
        }),
        mocks: [
          ...HEADER_BAR_MOCK,
          ...DATA_BLOCKS_HEADER_MOCK,
          ...CHAIN_ID_MOCK_DATA,
          ...LATEST_BLOCK_MOCK_DATA,
          ...LATEST_BLOCKS_MOCK_DATA({
            limit: 10,
            offset: 1,
          }),
        ],
      }),
    );
    await awaitActions({
      wrapper,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find('.blocks-content__header--desktop')).toHaveLength(1);
    expect(wrapper.find(DataBlocksHeader)).toHaveLength(1);
    expect(wrapper.find(HeaderBarDesktop)).toHaveLength(1);
    expect(wrapper.find(HeaderBarMobile)).toHaveLength(1);
  });
});
