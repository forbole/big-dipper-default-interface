import React from 'react';
import { mount } from 'enzyme';
import Activities from '@screens/activities';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import {
  Layout,
  DataBlocksHeader,
} from '@components';

describe('Activities', () => {
  it('it renders', () => {
    expect(Activities).toBeTruthy();
    const wrapper = mount(
      BaseWrapper({
        component: <Activities />,
        theme: createMuiTheme(lightTheme),
      }),
    );
    expect(wrapper).not.toBeNull();
  });

  it('correctly renders Home component with hooks', async () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Activities />,
        theme: createMuiTheme(lightTheme),
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(DataBlocksHeader)).toHaveLength(1);
  });
});
