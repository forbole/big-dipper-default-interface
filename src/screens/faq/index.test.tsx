import React from 'react';
import { mount } from 'enzyme';
import Faq from '@screens/faq';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import {
  LAYOUT_MOCK_DATA, CHAIN_ID_MOCK_DATA,
} from '@tests/mocks';

describe('Faq', () => {
  it('it renders', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));

    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <Faq />,
          theme: lightTheme,
        }),
        mocks: CHAIN_ID_MOCK_DATA,
      }),
    );

    await awaitActions({
      wrapper,
    });

    expect(
      wrapper.find('h1').first().text(),
    ).toBe('FAQ');
  });
});
