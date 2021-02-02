import React from 'react';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import { ProposalList } from '@forbole/big-dipper-default-ui';
import { dummyProposalList } from './utils';

describe('ProposalList', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <ProposalList
          data={dummyProposalList}
          proposerDisplay="Proposer"
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(ProposalList)).toHaveLength(1);
  });
});
