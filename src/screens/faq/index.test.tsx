import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import Faq from '@screens/faq';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { LAYOUT_MOCK_DATA } from '@tests/mocks';

describe('Faq', () => {
  it('it renders', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    const wrapper = mount(BaseWrapper({
      component: <Faq />,
      theme: lightTheme,
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
