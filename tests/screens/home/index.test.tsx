import React from 'react';
import { mount } from 'enzyme';
import Home from '@screens/home';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import {
  Layout,
  DataBlocksHeader,
  StabilitiesItem,
} from '@components';

describe('Home', () => {
  it('it renders', () => {
    expect(Home).toBeTruthy();
    const wrapper = mount(
      BaseWrapper({
        component: <Home />,
        theme: createMuiTheme(lightTheme),
      }),
    );
    expect(wrapper).not.toBeNull();
  });

  it('correctly renders Home component with hooks', async () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Home />,
        theme: createMuiTheme(lightTheme),
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(DataBlocksHeader)).toHaveLength(1);
    expect(wrapper.find(StabilitiesItem)).toHaveLength(1);
  });
});
