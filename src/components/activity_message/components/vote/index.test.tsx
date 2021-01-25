import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgVote } from '@models';
import Vote from '.';

describe('Vote', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Vote
          message={MsgVote.fromJson({
            '@type': '/cosmos.gov.v1beta1.MsgVote',
            proposal_id: '1',
            voter: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
            option: 'VOTE_OPTION_YES',
          })}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.address')).toHaveLength(1);
    expect(wrapper.find('p').first().text()).toEqual('desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu txVoteOne yes txVoteTwo proposal #1');
  });
});
