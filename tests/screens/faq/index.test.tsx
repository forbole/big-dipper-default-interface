import React from 'react';
import { mount } from 'enzyme';
import Faq from '@screens/faq';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';

describe('Faq', () => {
  it('it renders', () => {
    const wrapper = mount(BaseWrapper({
      component: <Faq />,
      theme: createMuiTheme(lightTheme),
    }));

    expect(
      wrapper.find('h1').first().text(),
    ).toBe('FAQ');
  });
});
