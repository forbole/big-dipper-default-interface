import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { DataBlock } from 'big-dipper-default-ui';
import { DataBlocksHeader } from '@components';
import { awaitActions } from '@tests/utils/await_actions';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { DATA_BLOCKS_HEADER_MOCK } from '@tests/mocks';

describe('DataBlocksHeader', () => {
  it('correctly renders component', async () => {
    expect(DataBlocksHeader).toBeTruthy();

    const wrap = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <DataBlocksHeader />,
          theme: lightTheme,
        }),
        mocks: DATA_BLOCKS_HEADER_MOCK,
      }),
    );

    await awaitActions({
      wrapper: wrap,
      time: 10,
    });

    expect(wrap).not.toBeNull();
    expect(wrap.find(DataBlock)).toHaveLength(4);
    expect(wrap.find('.data-blocks-container')).toHaveLength(1);
    expect(wrap.find('.latest-block-height').find('h1').text()).toEqual('45,432');
    expect(wrap.find('.average-block-time').find('.MuiSelect-select').text()).toEqual('lastDay');
    expect(wrap.find('.average-block-time').find('h1').text()).toEqual('6.09 s');
    expect(wrap.find('.MuiMenu-list')).toHaveLength(0);
    expect(wrap.find('.price').find('h1').text()).toEqual('$ 0.00');
    expect(wrap.find('.active-validators').find('h1').text()).toEqual('81');
  });
});
