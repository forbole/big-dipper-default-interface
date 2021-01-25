import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import News from '@screens/news';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { lightTheme } from '@styles';
import {
  Layout,
  DataBlocksHeader,
} from '@components';
import { LAYOUT_MOCK_DATA } from '@tests/mocks';

describe('News', () => {
  it('it renders', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    expect(News).toBeTruthy();
    const wrapper = mount(
      BaseWrapper({
        component: <News />,
        theme: lightTheme,
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
        theme: lightTheme,
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
