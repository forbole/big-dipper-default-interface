import React from 'react';
import { mount } from 'enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgUnjail } from '@models';
import Unjail from '.';

describe('Unjail', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Unjail
          message={MsgUnjail.fromJson({
            '@type': '/cosmos.slashing.v1beta1.MsgUnjail',
            validator_addr: 'desmosvaloper13yp2fq3tslq6mmtq4628q38xzj75ethz8j43kw',
          })}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.address')).toHaveLength(1);
    expect(wrapper.find('p').first().text()).toEqual('desmosvaloper13yp2fq3tslq6mmtq4628q38xzj75ethz8j43kw txUnjailOne');
  });
});
