import React from 'react';
import { mount } from 'enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgFundCommunityPool } from '@models';
import Fund from '.';

describe('Fund ', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Fund
          message={MsgFundCommunityPool.fromJson({
            '@type': '/cosmos.distribution.v1beta1.MsgFundCommunityPool',
            amount: [
              {
                denom: 'udaric',
                amount: '1000',
              },
            ],
            depositor: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
          })}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.address')).toHaveLength(1);
    expect(wrapper.find('.amount').first().text()).toEqual('0.001 DARIC');
    expect(wrapper.find('.address').first().text()).toEqual('desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu');
  });
});
