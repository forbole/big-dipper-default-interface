import React from 'react';
import { mount } from 'enzyme';
import { CircularProgress } from '@material-ui/core';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import InfiniteLoader from '.';

describe('HeaderBarDesktop', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <InfiniteLoader />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find('.infinite-loader')).toHaveLength(1);
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
  });
});
