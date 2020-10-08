import React from 'react';
import { mount } from 'enzyme';
import About from '@screens/about';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { queryExample } from '@graphql/queries';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import { WithMockMaterialTheme } from '@tests/utils/mock_material_theme';

const mocks = [
  {
    request: {
      query: queryExample,
      variables: {
      },
    },
  },
];

describe('About', () => {
  it('it renders', () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: WithMockMaterialTheme({
          component: <About />,
          theme: createMuiTheme(lightTheme),
        }),
        mocks,
      }),
    );
    expect(
      wrapper.find('span').first().text(),
    ).toBe('aboutbigDipper');
    expect(
      wrapper.find('span').at(1).text(),
    ).toBe('paragraph');
  });
});
