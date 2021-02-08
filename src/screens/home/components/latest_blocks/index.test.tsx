import React from 'react';
import { mount } from 'enzyme';
import {
  LatestBlocksMobile,
  TablePreviewWrapper,
  LatestBlocksDesktop,
} from '@forbole/big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { LATEST_BLOCKS_MOCK_DATA } from '@tests/mocks';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { lightTheme } from '@styles';
import { mockedAxios } from '@tests/utils/mock_axios';
import LatestBlocks from '.';

describe('LatestBlocks', () => {
  it('correctly renders component', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve({
      status: {
        code: 0,
      },
      them: [
        {
        },
      ],
    }));
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <LatestBlocks />,
          theme: lightTheme,
        }),
        mocks: LATEST_BLOCKS_MOCK_DATA(),
      }),
    );

    await awaitActions({
      wrapper,
      time: 10,
    });

    expect(wrapper).not.toBeNull();
    expect(wrapper.find(LatestBlocksMobile)).toHaveLength(1);
    expect(wrapper.find(TablePreviewWrapper)).toHaveLength(2);
    expect(wrapper.find(LatestBlocksDesktop)).toHaveLength(1);
  });
});
