import React from 'react';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { AddressDisplay } from '@components';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import { MsgCreateValidator } from '@models';
import CreateValidator from '.';

describe('CreateValidator', () => {
  it('correctly renders CreateValidator', async () => {
    const wrapper = mount(
      BaseWrapper({
        component: <CreateValidator
          message={MsgCreateValidator.fromJson({
          })}
        />,
        theme: lightTheme,
      }),
    );

    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.address')).toHaveLength(2);
    expect(wrapper.find(AddressDisplay)).toHaveLength(2);
  });
});
