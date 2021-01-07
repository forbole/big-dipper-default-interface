import React from 'react';
import { mount } from '@src/components/proposer/node_modules/enzyme';
import {
  Tab,
  Tabs,
} from '@material-ui/core';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import {
  ValidatorListMobile, ValidatorListDesktop,
} from 'big-dipper-default-ui';
import ValidatorList from '.';

describe('ValidatorList', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <ValidatorList />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(ValidatorListMobile)).toHaveLength(1);
    expect(wrapper.find(ValidatorListDesktop)).toHaveLength(1);
    expect(wrapper.find(Tabs)).toHaveLength(1);
    expect(wrapper.find(Tab)).toHaveLength(2);
    expect(wrapper.find('.validator-list__active')).toHaveLength(1);
    expect(wrapper.find('.validator-list__inactive')).toHaveLength(0);

    wrapper.find(Tab).last().simulate('click');
    expect(wrapper.find('.validator-list__active')).toHaveLength(0);
    expect(wrapper.find('.validator-list__inactive')).toHaveLength(1);
  });
});
