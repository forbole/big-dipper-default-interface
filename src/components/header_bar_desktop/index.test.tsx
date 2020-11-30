import React from 'react';
import { mount } from 'enzyme';
import { HeaderBarDesktop as HeaderBar } from 'big-dipper-internal-ui';
import { HeaderBarDesktop } from '@components';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';

describe('HeaderBarDesktop', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <HeaderBarDesktop
          title="hello world"
          communityPool={{
            data: [],
            error: undefined,
            loading: false,
          }}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(HeaderBar)).toHaveLength(1);
  });
});
