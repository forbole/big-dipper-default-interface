import React from 'react';
import { NextSeo } from 'next-seo';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import NotFound from '.';

describe('NotFound', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <NotFound />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(NextSeo)).toHaveLength(1);
  });
});
