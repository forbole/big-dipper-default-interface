import React from 'react';
import { mount } from '@src/components/header_bar_desktop/node_modules/enzyme';
import { MaxWidthContent } from '@components';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';

describe('MaxWidthContent', () => {
  it('correctly renders MaxWidthContent component', () => {
    expect(MaxWidthContent).toBeTruthy();
    const wrap = mount(BaseWrapper({
      component:
  <MaxWidthContent className="hello-world">
    <h1>Hello World</h1>
  </MaxWidthContent>,
      theme: lightTheme,
    }));

    expect(wrap).not.toBeNull();
    expect(wrap.find('h1')).toHaveLength(1);
    expect(wrap.find('.hello-world')).not.toBeNull();
  });
});
