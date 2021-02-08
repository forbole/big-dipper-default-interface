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
      wrapper.find('.text').first().text(),
    ).toBe('Important information regarding your rights and obligations while using the Services');
  });
});
