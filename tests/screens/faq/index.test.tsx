import React from 'react';
import { mount } from 'enzyme';
import Faq from '@screens/faq';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import { WithMockMaterialTheme } from '@tests/utils/mock_material_theme';

describe('Faq', () => {
  it('it renders', () => {
    const wrapper = mount(WithMockMaterialTheme({
      component: <Faq />,
      theme: createMuiTheme(lightTheme),
    }));

    expect(
      wrapper.find('h1').first().text(),
    ).toBe('FAQ');
    expect(
      wrapper.find('p').first().text(),
    ).toBe('contextemail');
    expect(
      wrapper.find('h2').first().text(),
    ).toBe('subTitle1');
  });
});
