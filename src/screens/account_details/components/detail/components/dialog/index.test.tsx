import React from 'react';
import { mount } from 'enzyme';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import Dialog from '.';

describe('Dialog', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <Dialog
          address={{
            display: 'cosmos14kn0k…swhp',
            rawValue: 'cosmos14kn0k…swhp',
          }}
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(Dialog)).toHaveLength(1);
  });
});
