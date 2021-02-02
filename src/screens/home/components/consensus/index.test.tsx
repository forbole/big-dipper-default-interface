import React from 'react';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import { Consensus } from '@forbole/big-dipper-default-ui';
import { dummyProposerData } from './utils';

describe('Consensus', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Consensus
          title="Consensus State"
          height={{
            title: 'Height',
            display: '2,769,405',
          }}
          proposer={dummyProposerData}
          votingPower={{
            title: 'Voting Power',
            value: 0.85,
          }}
          colors={['#FD3B4C', '#E8E8E8']}
          round={{
            title: 'Round',
            display: '6',
          }}
          step={{
            title: 'Step',
            display: '4',
          }}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
  });
});
