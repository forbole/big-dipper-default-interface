import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import {
  MsgWithdrawDelegatorReward, MsgDelegate,
} from '@models';
import ActivityMessage from '.';
import {
  WithdrawReward,
  Delegate,
} from './components';

describe('ActivityMessage', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <ActivityMessage
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
    expect(wrapper.find(WithdrawReward)).toHaveLength(1);
  });

  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <ActivityMessage
          message={MsgDelegate.fromJson({
            '@type': '/cosmos.staking.v1beta1.MsgDelegate',
            delegator_address: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
            validator_address: 'desmosvaloper13yp2fq3tslq6mmtq4628q38xzj75ethz8j43kw',
            amount: {
              denom: 'udaric',
              amount: '1000',
            },
          })}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(WithdrawReward)).toHaveLength(0);
    expect(wrapper.find(Delegate)).toHaveLength(1);
  });
});
