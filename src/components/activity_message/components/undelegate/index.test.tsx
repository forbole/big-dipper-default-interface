import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgUndelegate } from '@models';
import Undelegate from '.';

describe('Undelegate', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Undelegate
          message={MsgUndelegate.fromJson({
            '@type': '/cosmos.staking.v1beta1.MsgUndelegate',
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
    expect(wrapper.find('.address')).toHaveLength(2);
    expect(wrapper.find('.amount')).toHaveLength(1);
    expect(wrapper.find('.address').first().text()).toEqual('desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu');
    expect(wrapper.find('.address').last().text()).toEqual('desmosvaloper13yp2fq3tslq6mmtq4628q38xzj75ethz8j43kw');
  });
});
