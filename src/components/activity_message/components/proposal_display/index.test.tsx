import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import Link from 'next/link';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import ProposalDisplay from '.';

describe('ProposalDisplay', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <ProposalDisplay
          title="hello world"
          proposalId={0}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find('a').first().text()).toEqual('hello world');
  });

  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <ProposalDisplay
          proposalId={0}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find('a').first().text()).toEqual('proposal #0');
  });
});
