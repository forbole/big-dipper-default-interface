import React from 'react';
import { mount } from 'enzyme';
import About from '@screens/about';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { LAYOUT_MOCK_DATA } from '@tests/utils/mock_data';

describe('About', () => {
  it('it renders', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    const wrapper = mount(BaseWrapper({
      component: <About />,
      theme: createMuiTheme(lightTheme),
    }));
    await awaitActions({
      wrapper,
      time: 10,
    });
    expect(
      wrapper.find('h1').first().text(),
    ).toBe('aboutbigDipper');
    expect(
      wrapper.find('.details').first().text(),
    ).toBe('paragraph');
  });
});
