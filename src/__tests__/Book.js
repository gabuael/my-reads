import React from 'react';
import { shallow, mount } from 'enzyme';
import Book from '../scenes/Book'

describe('<Book />', () => {
  const wrapper = mount( <Book />);

  it('shallow renders without crashing', () => {
    expect(shallow(<Book />))
  })

  it('mount without crashing', () => {
    expect(mount(<Book />))
  })

})