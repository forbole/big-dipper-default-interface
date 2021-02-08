import React from 'react';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { lightTheme } from '@styles';
import { Layout } from '@components';
import {
  LAYOUT_MOCK_DATA,
  HEADER_BAR_MOCK,
  DATA_BLOCKS_HEADER_MOCK,
  CHAIN_ID_MOCK_DATA,
} from '@tests/mocks';
import ProposalDetails from '.';

describe('ProposalDetails', () => {
  it('correctly renders Home component with hooks', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <ProposalDetails />,
          theme: lightTheme,
        }),
        mocks: [
          ...HEADER_BAR_MOCK,
          ...DATA_BLOCKS_HEADER_MOCK,
          ...CHAIN_ID_MOCK_DATA,
        ],
      }),
    );
    await awaitActions({
      wrapper,
      time: 10,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Layout)).toHaveLength(1);
  });
});
