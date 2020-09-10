import React from 'react';
import { shallow } from 'enzyme';
import Home from '@screens/home';
import { Example } from '@components';

describe('Home', () => {
  it('correctly renders Home component', () => {
    const wrap = shallow(<Home />);
    expect(
      wrap.find('h1'),
    ).toHaveLength(2);

    expect(
      wrap.find('h1').first().text(),
    ).toEqual('bigDipper');

    expect(
      wrap.find(Example).exists(),
    ).toBe(true);
  });
});
