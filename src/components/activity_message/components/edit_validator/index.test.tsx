import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgEditValidator } from '@models';
import EditValidator from '.';

describe('EditValidator', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <EditValidator
          message={MsgEditValidator.fromJson({
            '@type': '/cosmos.staking.v1beta1.MsgEditValidator',
            description: {
              moniker: 'Forbole',
              identity: '[do-not-modify]',
              website: '[do-not-modify]',
              security_contact: '[do-not-modify]',
              details: '[do-not-modify]',
            },
            validator_address: 'desmosvaloper13yp2fq3tslq6mmtq4628q38xzj75ethz8j43kw',
            commission_rate: null,
            min_self_delegation: null,
          })}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.address')).toHaveLength(1);
    expect(wrapper.find('.address').first().text()).toEqual('Forbole');
  });
});
