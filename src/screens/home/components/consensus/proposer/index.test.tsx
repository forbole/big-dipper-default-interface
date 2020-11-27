import React from 'react';
import Link from 'next/link';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import Proposer from '.';

describe('Proposer', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Proposer id="3000" display="Forbole" />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find('div').first().text()).toEqual('Forbole');
  });
});
