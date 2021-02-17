import React from 'react';
import { mount } from 'enzyme';
import { ValidatorBlocks } from '@forbole/big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { awaitActions } from '@tests/utils/await_actions';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';
import { lightTheme } from '@styles';
import { VALIDATOR_LATEST_BLOCKS_MOCK_DATA } from '@tests/mocks';
import MissedBlocks from '.';

describe('PowerActivities', () => {
  it('correctly renders component', async () => {
    const wrapper = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <MissedBlocks />,
          theme: lightTheme,
        }),
        mocks: VALIDATOR_LATEST_BLOCKS_MOCK_DATA,
      }),
    );

    await awaitActions({
      wrapper,
    });

    expect(wrapper).not.toBeNull();
    expect(wrapper.find(ValidatorBlocks)).toHaveLength(1);
  });
});
