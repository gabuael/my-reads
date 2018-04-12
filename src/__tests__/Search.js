import React from 'react'
import { shallow, mount } from 'enzyme'
import Search from '../scenes/Search'

describe('<Search />', () => {
  const wrapper = mount(<Search />)

  it('shallow renders without crashing', () => {
    expect(shallow(<Search />))
  })

  it('mount without crashing', () => {
    expect(mount(<Search />))
  })
  
  it('has one List components', () => {
    expect(wrapper.find('List').length).toBe(1)
  })

})