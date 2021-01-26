import React from 'react';
import { mount } from 'enzyme';
import Validators from '@screens/validators';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { lightTheme } from '@styles';
import {
  Layout,
  DataBlocksHeader,
} from '@components';
import {
  LAYOUT_MOCK_DATA, HEADER_BAR_MOCK, DATA_BLOCKS_HEADER_MOCK,
} from '@tests/mocks';

describe('Validators', () => {
  it('it renders', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    expect(Validators).toBeTruthy();
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Validators />,
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
          component: <Validators />,
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
    expect(wrapper.find(DataBlocksHeader)).toHaveLength(1);
  });
});
