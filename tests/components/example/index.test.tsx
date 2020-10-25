import React from 'react';
import { shallow } from 'enzyme';
import { Example } from '@components';

describe('Home', () => {
  it('correctly renders Home component', () => {
    const wrap = shallow(<Example />);
    expect(
      wrap.find('div').first().text(),
    ).toEqual('component example');
  });
});
