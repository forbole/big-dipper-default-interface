import React from 'react';
import { mount } from 'enzyme';
import Blocks from '@screens/blocks';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { COMMUNITY_POOL_QUERY } from '@graphql/queries';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import {
  Layout,
  DataBlocksHeader,
} from '@components';

const LAYOUT_MOCK_DATA = {
  data: [],
};

const MOCKS = [
  {
    request: {
      query: COMMUNITY_POOL_QUERY,
      variables: {
      },
    },
    result: {
      data: {
        community_pool: [
          {
            coins: [
              {
                amount: 300000,
                denom: 'udaric',
              },
            ],
          },
        ],
      },
    },
  },
];

describe('Blocks', () => {
  it('it renders', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    expect(Blocks).toBeTruthy();
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Blocks />,
          theme: createMuiTheme(lightTheme),
        }),
        mocks: MOCKS,
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
          theme: createMuiTheme(lightTheme),
        }),
        mocks: MOCKS,
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
