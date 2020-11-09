import React from 'react';
import { mount } from 'enzyme';
import Home from '@screens/home';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { queryExample } from '@graphql/queries';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';

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
        component: BaseWrapper({
          component: <Home />,
          theme: createMuiTheme(lightTheme),
        }),
        mocks,
      }),
    );
    expect(wrapper).not.toBeNull();
  });

  it('correctly renders Home component with hooks', async () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Home />,
          theme: createMuiTheme(lightTheme),
        }),
        mocks,
      }),
    );
    expect(wrapper).not.toBeNull();
    // apollo example testing
    // await awaitActions({
    //   wrapper,
    //   time: 10,
    // });

    // expect(
    //   wrapper.find('h1').last().text(),
    // ).toBe('forbole');

    // expect(
    //   wrapper.find('h3').first().text(),
    // ).toEqual('done loading!');
  });
});
