import React from 'react';
import { mount } from 'enzyme';
import {
  LatestBlocksMobile,
  TablePreviewWrapper,
  LatestBlocksDesktop,
} from 'big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import LatestBlocks from '.';

describe('LatestBlocks', () => {
  it('correctly renders component', () => {
    const wrapper = mount(
      BaseWrapper({
        component: <LatestBlocks />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(LatestBlocksMobile)).toHaveLength(1);
    expect(wrapper.find(TablePreviewWrapper)).toHaveLength(2);
    expect(wrapper.find(LatestBlocksDesktop)).toHaveLength(1);
  });
});
