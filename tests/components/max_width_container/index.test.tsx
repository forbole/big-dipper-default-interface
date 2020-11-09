import React from 'react';
import { mount } from 'enzyme';
import { MaxWidthContainer } from '@components';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';

describe('MaxWidthContainer', () => {
  it('correctly renders MaxWidthContainer component', () => {
    expect(MaxWidthContainer).toBeTruthy();
    const wrap = mount(BaseWrapper({
      component:
  <MaxWidthContainer className="hello-world">
    <h1>Hello World</h1>
  </MaxWidthContainer>,
      theme: lightTheme,
    }));

    expect(wrap).not.toBeNull();
    expect(wrap.find('h1')).toHaveLength(1);
    expect(wrap.find('.hello-world')).not.toBeNull();
  });
});
