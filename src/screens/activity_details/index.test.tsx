import React from 'react';
import { mount } from 'enzyme';
import { ActivityDetails as Details } from '@forbole/big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { mockedAxios } from '@tests/utils/mock_axios';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { lightTheme } from '@styles';
import {
  Layout, ActivityMessage,
} from '@components';
import {
  LAYOUT_MOCK_DATA,
  HEADER_BAR_MOCK,
  DATA_BLOCKS_HEADER_MOCK,
  ACTIVITY_DETAILS_MOCK_DATA,
  CHAIN_ID_MOCK_DATA,
} from '@tests/mocks';
import ActivityDetails from '.';

describe('ActivityDetails', () => {
  it('correctly renders Home component with hooks', async () => {
    mockedAxios?.get?.mockImplementationOnce(() => Promise.resolve(LAYOUT_MOCK_DATA));
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <ActivityDetails />,
          theme: lightTheme,
        }),
        mocks: [
          ...HEADER_BAR_MOCK,
          ...DATA_BLOCKS_HEADER_MOCK,
          ...ACTIVITY_DETAILS_MOCK_DATA,
          ...CHAIN_ID_MOCK_DATA,
        ],
      }),
    );
    await awaitActions({
      wrapper,
    });
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(Details)).toHaveLength(1);
    expect(wrapper.find('.messages__container')).toHaveLength(1);
    expect(wrapper.find(ActivityMessage)).toHaveLength(1);
  });
});
