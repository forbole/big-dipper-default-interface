import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgWithdrawDelegatorReward } from '@models';
import WithdrawReward from '.';

describe('WithdrawReward', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <WithdrawReward
          message={MsgWithdrawDelegatorReward.fromJson({
            '@type': '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
            delegator_address: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
            validator_address: 'desmosvaloper13yp2fq3tslq6mmtq4628q38xzj75ethz8j43kw',
          })}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.address')).toHaveLength(2);
    expect(wrapper.find('p').first().text()).toEqual('desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu txWithdrawRewardOne desmosvaloper13yp2fq3tslq6mmtq4628q38xzj75ethz8j43kw');
  });
});
