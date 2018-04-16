import React from 'react'
import { shallow, mount } from 'enzyme'
import Search from '../scenes/Search'

describe('<Search />', () => {
  const filterBooks = jest.fn();
  const wrapper = mount(<Search filterBooks={filterBooks}/>);

  it('shallow renders without crashing', () => {
    expect(shallow(<Search filterBooks={filterBooks}/>))
  })

  it('mount without crashing', () => {
    expect(mount(<Search filterBooks={filterBooks}/>))
  })
  
  it('has one List components if state search is not empty', () => {
    wrapper.setState({search: 'a'});
    expect(wrapper.find('List').length).toBe(1)
  })

  it('does not render list if state search is empty', () => {
    wrapper.setState({search: ''});
    expect(wrapper.find('List').length).toBe(0);
  })

})