import React from 'react';
import { mount } from 'enzyme';
import About from '@screens/about';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import { WithMockMaterialTheme } from '@tests/utils/mock_material_theme';

describe('About', () => {
  it('it renders', () => {
    const wrapper = mount(WithMockMaterialTheme({
      component: <About />,
      theme: createMuiTheme(lightTheme),
    }));

    expect(
      wrapper.find('h1').first().text(),
    ).toBe('aboutbigDipper');
    expect(
      wrapper.find('p').first().text(),
    ).toBe('paragraph');
  });
});
