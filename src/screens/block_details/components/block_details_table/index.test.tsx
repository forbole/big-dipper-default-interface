import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { BlockDetails } from 'big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { awaitActions } from '@tests/utils/await_actions';
import { BLOCK_DETAILS_MOCK_DATA } from '@tests/mocks';
import BlockDetailsTable from '.';

describe('BlockDetailsTable', () => {
  it('correctly renders component', async () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <BlockDetailsTable />,
          theme: lightTheme,
        }),
        mocks: [
          ...BLOCK_DETAILS_MOCK_DATA,
        ],
      }),
    );

    await awaitActions({
      wrapper,
      time: 10,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(BlockDetails)).toHaveLength(1);
  });
});
