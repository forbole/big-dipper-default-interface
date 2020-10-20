import React from 'react';
import { mount } from 'enzyme';
import Home from '@screens/home';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { awaitActions } from '@tests/utils/await_actions';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import { WithMockMaterialTheme } from '@tests/utils/mock_material_theme';

const mocks = [
  {
    request: {
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
        component: WithMockMaterialTheme({
          component: <Home />,
          theme: createMuiTheme(lightTheme),
        }),
        mocks,
      }),
    );
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
        component: WithMockMaterialTheme({
          component: <Home />,
          theme: createMuiTheme(lightTheme),
        }),
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
