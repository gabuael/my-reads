import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../scenes/Home'

describe('<Home />', () => {
  const filterBooks = jest.fn();
  const wrapper = mount( <Home filterBooks={filterBooks}/>);

  it('shallow renders without crashing', () => {
    expect(shallow(<Home filterBooks={filterBooks}/>))
  })

  it('mount without crashing', () => {
    expect(mount(<Home filterBooks={filterBooks}/>))
  })

  it('has three List components', () => {
    expect(wrapper.find('List').length).toBe(3)
  })

})