import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgSend } from '@models';
import Send from '.';

describe('Send', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Send
          message={MsgSend.fromJson({
            '@type': '/cosmos.bank.v1beta1.MsgSend',
            from_address: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
            to_address: 'desmos13yp2fq3tslq6mmtq4628q38xzj75etdashzela9uu',
            amount: [
              {
                denom: 'udaric',
                amount: '1000',
              },
            ],
          })}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.address')).toHaveLength(2);
    expect(wrapper.find('.amount').first().text()).toEqual('0.001 DARIC');
    expect(wrapper.find('.address').last().text()).toEqual('desmos13yp2fq3tslq6mmtq4628q38xzj75etdashzela9uu');
  });
});
