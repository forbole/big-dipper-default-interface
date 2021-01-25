import React from 'react';
import Link from 'next/link';
import { mount } from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import Proposer from '.';

describe('Proposer', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Proposer id="3000" display="Forbole" imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg" />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find('div').first().text()).toEqual('Forbole');
  });
});
