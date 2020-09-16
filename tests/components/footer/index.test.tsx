import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '@components';
import { WithMockMaterialTheme } from '@tests/utils/mock_material_theme';
import { lightTheme } from '@styles';

describe('Home', () => {
  it('correctly renders Home component', () => {
    const wrap = shallow(WithMockMaterialTheme({
      component: <Footer />,
      theme: lightTheme,
    }));
    expect(
      wrap.find('div').first().text(),
    ).toEqual('component example');
  });
});
