import React from 'react';
import { mount } from 'enzyme';
import { HeaderBar } from '@components';
import { WithMockMaterialTheme } from '@tests/utils/mock_material_theme';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
// import {
//   Button,
//   ListItem,
// } from '@material-ui/core';

describe('HeaderBar', () => {
  it('correctly renders component', () => {
    const wrapper = mount(WithMockMaterialTheme({
      component: <HeaderBar title="hello world" />,
      theme: createMuiTheme(lightTheme),
    }));
    expect(wrapper).not.toBeNull();
    // expect(wrap.find(Button)).toHaveLength(0);
    // expect(wrap.find(ListItem)).toHaveLength(3);
  });
});
