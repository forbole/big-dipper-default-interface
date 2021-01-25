import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { MsgUnknown } from '@models';
import Unknown from '.';

describe('Unknown', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Unknown
          message={MsgUnknown.fromJson({
          })}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('code')).toHaveLength(1);
  });
});
