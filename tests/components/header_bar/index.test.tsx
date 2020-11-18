import React from 'react';
import { mount } from 'enzyme';
import { DesktopHeaderBar } from 'big-dipper-internal-ui';
import { HeaderBar } from '@components';
import { COMMUNITY_POOL_QUERY } from '@graphql/queries';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';

describe('HeaderBar', () => {
  it('correctly renders component', () => {
    const mocks = [
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

    const wrapper = mount(
      WithMockApolloProvider({
        component: <HeaderBar title="hello world" />,
        mocks,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(DesktopHeaderBar)).toHaveLength(1);
  });
});
