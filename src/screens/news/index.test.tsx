import React from 'react';
import { mount } from 'enzyme';
import News from '@screens/news';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { lightTheme } from '@styles';
import {
  Layout,
  DataBlocksHeader,
} from '@components';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import {
  LAYOUT_MOCK_DATA, CHAIN_ID_MOCK_DATA,
} from '@tests/mocks';

describe('News', () => {
  it('correctly renders Home component with hooks', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <News />,
          theme: lightTheme,
        }),
        mocks: CHAIN_ID_MOCK_DATA,
      }),
    );
    await awaitActions({
      wrapper,
      time: 10,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(DataBlocksHeader)).toHaveLength(0);
  });
});
