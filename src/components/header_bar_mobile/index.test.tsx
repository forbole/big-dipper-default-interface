import React from 'react';
import { mount } from 'enzyme';
import { HeaderBarMobile as HeaderBar } from 'big-dipper-internal-ui';
import { HeaderBarMobile } from '@components';
import { lightTheme } from '@styles';
import { BaseWrapper } from '@tests/utils/base_wrapper';

describe('HeaderBarDesktop', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <HeaderBarMobile
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
