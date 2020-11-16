import React from 'react';
import { mount } from 'enzyme';
import { DataBlock } from 'big-dipper-default-ui';
import { DataBlocksHeader } from '@components';
import { WithMockMaterialTheme } from '@tests/utils/mock_material_theme';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from '@styles';

describe('DataBlocksHeader', () => {
  it('correctly renders component', () => {
    expect(DataBlocksHeader).toBeTruthy();
    const wrap = mount(WithMockMaterialTheme({
      component: <DataBlocksHeader />,
      theme: createMuiTheme(lightTheme),
    }));

    expect(wrap).not.toBeNull();
    expect(wrap.find(DataBlock)).toHaveLength(4);
    expect(wrap.find('.data-blocks-container')).toHaveLength(1);
  });
});
