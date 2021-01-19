import React from 'react';
import { mount } from 'enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgVerifyInvariant } from '@models';
import VerifyInvariant from '.';

describe('VerifyInvariant', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <VerifyInvariant
          message={MsgVerifyInvariant.fromJson({
            '@type': '/cosmos.crisis.v1beta1.MsgVerifyInvariant',
            sender: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
            invariant_module_name: 'distribution',
            invariant_route: 'module-account',
          })}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.address')).toHaveLength(1);
    expect(wrapper.find('p').first().text()).toEqual('desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu txVerifyInvariantOne');
  });
});
