import React from 'react';
import { mount } from 'enzyme';
import About from '@screens/about';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';

describe('About', () => {
  it('it renders', () => {
    const wrapper = mount(BaseWrapper({
      component: <About />,
      theme: createMuiTheme(lightTheme),
    }));

    expect(
      wrapper.find('h1').first().text(),
    ).toBe('aboutbigDipper');
    expect(
      wrapper.find('.details').first().text(),
    ).toBe('paragraph');
  });
});
