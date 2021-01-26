import React from 'react';
import { mount } from 'enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgMultiSend } from '@models';
import Multisend from '.';

describe('Multisend', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Multisend
          message={MsgMultiSend.fromJson({
            '@type': '/cosmos.bank.v1beta1.MsgMultiSend',
            inputs: [
              {
                address: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
                coins: [
                  {
                    denom: 'udaric',
                    amount: '1000',
                  },
                ],
              },
            ],
            outputs: [
              {
                address: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
                coins: [
                  {
                    denom: 'udaric',
                    amount: '1000',
                  },
                ],
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
    expect(wrapper.find('.address').first().text()).toEqual('desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu');
  });
});
