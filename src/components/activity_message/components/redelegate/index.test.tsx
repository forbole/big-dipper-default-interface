import React from 'react';
import { mount } from 'enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgRedelegate } from '@models';
import Redelegate from '.';

describe('Redelegate', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Redelegate
          message={MsgRedelegate.fromJson({
            '@type': '/cosmos.staking.v1beta1.MsgBeginRedelegate',
            delegator_address: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
            validator_src_address: 'desmosvaloper13yp2fq3tslq6mmtq4628q38xzj75ethz8j43kw',
            validator_dst_address: 'desmosvaloper13yp2fq3tslq6mmtq4628q38xzj75ethz8j43kw',
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
    expect(wrapper.find('.address')).toHaveLength(3);
    expect(wrapper.find('.address').last().text()).toEqual('desmosvaloper13yp2fq3tslq6mmtq4628q38xzj75ethz8j43kw');
  });
});
