import React from 'react';
import { mount } from '@src/components/header_bar_desktop/node_modules/enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import { Stabilities } from 'big-dipper-default-ui';

describe('Stabilities', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Stabilities
          title="Stabilities"
          coin="atom"
          price={{
            title: 'Price',
            display: '$515,551,345.666',
          }}
          inflation={{
            title: 'inflation',
            display: '7 %',
          }}
          marketCap={{
            title: 'Market Cap',
            display: '$15,000',
          }}
          communityPool={{
            title: 'Community Pool',
            display: '370,000',
          }}
          data={{
            total: {
              value: 300000,
              display: '0.3 m',
            },
            detail: [
              {
                title: 'Bonded',
                value: 100000,
                display: '100,000',
              },
              {
                title: 'UnBonded',
                value: 200000,
                display: '200,000',
              },
            ],
          }}
          colors={['#FF7846', '#FFD800']}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
  });
});
