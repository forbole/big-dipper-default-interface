import React from 'react';
import { shallow } from 'enzyme';
import Home from '@screens/home';
import HomePage from '@src/pages/index';

describe('HomePage', () => {
  it('shallow renders Home component', () => {
    const wrap = shallow(<HomePage />);
    expect(
      wrap.find(Home).exists(),
    ).toBe(true);
  });
});
