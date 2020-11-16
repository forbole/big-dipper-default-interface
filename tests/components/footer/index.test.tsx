import React from 'react';
import { mount } from 'enzyme';
import { Footer } from '@components';
import { WithMockMaterialTheme } from '@tests/utils/mock_material_theme';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import {
  Button,
  ListItem,
} from '@material-ui/core';

describe('Footer', () => {
  it('correctly renders Footer component', () => {
    const wrap = mount(WithMockMaterialTheme({
      component: <Footer />,
      theme: createMuiTheme(lightTheme),
    }));

    expect(wrap.find(Button)).toHaveLength(2);
    expect(wrap.find(ListItem)).toHaveLength(3);
  });
});
