import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgDeposit } from '@models';
import DepositProposal from '.';

describe('TypeTag', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <DepositProposal
          message={MsgDeposit.fromJson({
            '@type': '/cosmos.gov.v1beta1.MsgDeposit',
            proposal_id: '1',
            depositor: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
            amount: [
              {
                denom: 'udaric',
                amount: '100',
              },
            ],
          })}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.address')).toHaveLength(1);
    expect(wrapper.find('.amount').text()).toEqual('0.0001 DARIC');
    expect(wrapper.find('.address').first().text()).toEqual('desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu');
  });
});
