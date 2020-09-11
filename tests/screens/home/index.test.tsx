import React from 'react';
import { mount } from 'enzyme';
import Home from '@screens/home';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { awaitActions } from '@tests/utils/await_actions';
import { queryExample } from '@graphql/queries';
import { Example } from '@components';

const mocks = [
  {
    request: {
      query: queryExample,
      variables: {
      },
    },
    result: {
      data: {
        rates: [
          {
            currency: 'usd',
          },
          {
            currency: 'hkd',
          },
        ],
      },
    },
  },
];

describe('Home', () => {
  it('it renders', () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: <Home />,
        mocks,
      }),
    );

    expect(
      wrapper.find(Example),
    ).not.toBeNull();

    expect(
      wrapper.find('h1'),
    ).toHaveLength(2);

    expect(
      wrapper.find('h1').first().text(),
    ).toBe('bigDipper');

    expect(
      wrapper.find('h1').last().text(),
    ).toBe('forbole');
  });

  it('correctly renders Home component with hooks', async () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: <Home />,
        mocks,
      }),
    );

    await awaitActions({
      wrapper,
      time: 10,
    });

    expect(
      wrapper.find('h1').last().text(),
    ).toBe('forbole');

    expect(
      wrapper.find('h3').first().text(),
    ).toEqual('done loading!');
  });
});
