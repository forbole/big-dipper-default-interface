import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgSubmitProposal } from '@models';
import SubmitProposal from '.';

describe('SubmitProposal', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <SubmitProposal
          message={MsgSubmitProposal.fromJson({
            '@type': '/cosmos.gov.v1beta1.MsgSubmitProposal',
            content: {
              '@type': '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal',
              title: 'Community spend proposal',
              description: 'This is a community spend proposal',
              recipient: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
              amount: [
                {
                  denom: 'udaric',
                  amount: '20000000',
                },
              ],
            },
          })}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.address')).toHaveLength(1);
    expect(wrapper.find('.link')).toHaveLength(1);
    expect(wrapper.find('.address').first().text()).toEqual('');
  });
});
