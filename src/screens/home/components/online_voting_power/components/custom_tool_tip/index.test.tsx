import React from 'react';
import { mount } from 'enzyme';
import CustomToolTip from '.';

describe('CustomToolTip', () => {
  it('Works', () => {
    expect(CustomToolTip).toBeTruthy();
    const wrap = mount(
      <CustomToolTip
        active
        payload={[{
          value: '123',
        }]}
        label="hello world"
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.custom-tool-tip')).toHaveLength(1);
    expect(wrap.find('.custom-tool-tip__label')).toHaveLength(1);
    expect(wrap.find('.custom-tool-tip__label').text()).toEqual('hello world');
    expect(wrap.find('.custom-tool-tip__value')).toHaveLength(1);
  });

  it('Works hidden', () => {
    expect(CustomToolTip).toBeTruthy();
    const wrap = mount(
      <CustomToolTip />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.custom-tool-tip')).toHaveLength(0);
    expect(wrap.find('.custom-tool-tip__label')).toHaveLength(0);
    expect(wrap.find('.custom-tool-tip__value')).toHaveLength(0);
  });
});
