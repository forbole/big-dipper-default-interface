import React from 'react';
import { mount } from 'enzyme';
import TermsAndConditions from '@screens/termsAndConditions';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { LAYOUT_MOCK_DATA } from '@tests/mocks';

describe('TermsAndConditions', () => {
  it('it renders', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    const wrapper = mount(BaseWrapper({
      component: <TermsAndConditions />,
      theme: lightTheme,
    }));
    await awaitActions({
      wrapper,
      time: 10,
    });
    expect(
      wrapper.find('h1').first().text(),
    ).toBe('termsAndConditions');
    expect(
      wrapper.find('.details').first().text(),
    ).toBe('Do you use Cookie? Should we have a Cookie Policy ? \n\nWe use cookies to improve user experience, and analyze website traffic. For these reasons, we may share your site usage data with our analytics partners. By clicking “Accept Cookies,” you consent to store on your device all the technologies described in our Cookie Policy. You can change your cookie settings at any time by clicking “Cookie Preferences. \n\n\n\nOption 1: Using Termly to generate \n\nOption 2: Copying from Keplr:\n\n');
  });
});
