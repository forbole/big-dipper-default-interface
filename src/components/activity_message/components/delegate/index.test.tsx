import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgDelegate } from '@models';
import Delegate from '.';

describe('TypeTag', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Delegate
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
    expect(wrapper.find('.address')).toHaveLength(2);
    expect(wrapper.find('.amount').text()).toEqual('0.001 DARIC');
    expect(wrapper.find('.address').first().text()).toEqual('desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu');
  });
});
