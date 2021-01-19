import React from 'react';
import { mount } from 'enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgSetWithdrawAddress } from '@models';
import SetWithdrawalAddress from '.';

describe('SetWithdrawalAddress', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <SetWithdrawalAddress
          message={MsgSetWithdrawAddress.fromJson({
            '@type': '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress',
            delegator_address: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
            withdraw_address: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
          })}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.address')).toHaveLength(2);
    expect(wrapper.find('.address').last().text()).toEqual('desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu');
  });
});
