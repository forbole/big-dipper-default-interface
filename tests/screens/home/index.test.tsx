import React from 'react';
import { mount } from 'enzyme';
import Home from '@screens/home';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import {
  Layout,
  DataBlocksHeader,
  // HeaderBar,
} from '@components';

describe('Home', () => {
  it('it renders', () => {
    const mockData = {
      data: [],
    };

    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(mockData));

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
    // expect(wrapper.find(HeaderBar)).toHaveLength(1);
  });
});
