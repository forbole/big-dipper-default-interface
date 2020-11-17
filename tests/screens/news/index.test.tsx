import React from 'react';
import { mount } from 'enzyme';
import News from '@screens/news';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import {
  Layout,
  DataBlocksHeader,
} from '@components';

const LAYOUT_MOCK_DATA = {
  data: [],
};

describe('News', () => {
  it('it renders', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    expect(News).toBeTruthy();
    const wrapper = mount(
      BaseWrapper({
        component: <News />,
        theme: createMuiTheme(lightTheme),
      }),
    );

    await awaitActions({
      wrapper,
      time: 10,
    });
    expect(wrapper).not.toBeNull();
  });

  it('correctly renders Home component with hooks', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    const wrapper = mount(
      BaseWrapper({
        component: <News />,
        theme: createMuiTheme(lightTheme),
      }),
    );
    await awaitActions({
      wrapper,
      time: 10,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(DataBlocksHeader)).toHaveLength(0);
  });
});
