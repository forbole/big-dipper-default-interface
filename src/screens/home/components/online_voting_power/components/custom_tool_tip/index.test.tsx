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
          payload: {
            votingPower: '123',
            height: '1234',
          },
        }]}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.custom-tool-tip')).toHaveLength(0);
    expect(wrap.find('.custom-tool-tip__label')).toHaveLength(2);
    expect(wrap.find('.custom-tool-tip__label').first().text()).toEqual('height');
    expect(wrap.find('.custom-tool-tip__value')).toHaveLength(2);
    expect(wrap.find('.custom-tool-tip__value').first().text()).toEqual('1,234');
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
