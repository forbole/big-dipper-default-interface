import React from 'react';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import { ProposalList } from 'big-dipper-default-ui';
import { dummyProposalList } from './utils';

describe('ProposalList', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <ProposalList
          data={dummyProposalList}
          imageUrl="/images/icons/wall-clock.png"
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
  });
});
