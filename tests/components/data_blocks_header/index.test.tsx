import React from 'react';
import { mount } from 'enzyme';
import { DataBlock } from 'big-dipper-default-ui';
import { DataBlocksHeader } from '@components';
import { awaitActions } from '@tests/utils/await_actions';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';
import {
  AVERAGE_BLOCK_LAST_MINUTE_QUERY,
  AVERAGE_BLOCK_LAST_HOUR_QUERY,
  AVERAGE_BLOCK_LAST_DAY_QUERY,
  AVERAGE_BLOCK_TIME_FROM_GENESIS_QUERY,
} from '@graphql/queries';
import { WithMockApolloProvider } from '@tests/utils/mock_apollo_provider';

describe('DataBlocksHeader', () => {
  it('correctly renders component', async () => {
    const mocks = [
      {
        request: {
          query: AVERAGE_BLOCK_LAST_MINUTE_QUERY,
          variables: {
          },
        },
        result: {
          data: {
            average_block_time_per_minute: [
              {
              },
            ],
          },
        },
      },
      {
        request: {
          query: AVERAGE_BLOCK_LAST_HOUR_QUERY,
          variables: {
          },
        },
        result: {
          data: {
            average_block_time_per_hour: [
              {
              },
            ],
          },
        },
      },
      {
        request: {
          query: AVERAGE_BLOCK_TIME_FROM_GENESIS_QUERY,
          variables: {
          },
        },
        result: {
          data: {
            average_block_time_from_genesis: [
              {
              },
            ],
          },
        },
      },
      {
        request: {
          query: AVERAGE_BLOCK_LAST_DAY_QUERY,
          variables: {
          },
        },
        result: {
          data: {
            average_block_time_per_day: [
              {
              },
            ],
          },
        },
      },
    ];

    expect(DataBlocksHeader).toBeTruthy();

    const wrap = mount(
      WithMockApolloProvider({
        component: BaseWrapper({
          component: <DataBlocksHeader />,
          theme: createMuiTheme(lightTheme),
        }),
        mocks,
      }),
    );
    await awaitActions({
      wrapper: wrap,
      time: 10,
    });

    expect(wrap).not.toBeNull();
    expect(wrap.find(DataBlock)).toHaveLength(4);
    expect(wrap.find('.data-blocks-container')).toHaveLength(1);
  });
});
