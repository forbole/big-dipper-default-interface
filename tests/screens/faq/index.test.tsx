import React from 'react';
import { mount } from 'enzyme';
import Faq from '@screens/faq';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';

const LAYOUT_MOCK_DATA = {
  data: [],
};

describe('Faq', () => {
  it('it renders', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    const wrapper = mount(BaseWrapper({
      component: <Faq />,
      theme: createMuiTheme(lightTheme),
    }));

    await awaitActions({
      wrapper,
      time: 10,
    });

    expect(
      wrapper.find('h1').first().text(),
    ).toBe('FAQ');
  });
});
