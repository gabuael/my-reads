import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'

describe('<App />', () => {
  const wrapper = mount(<App />)
  afterEach(() => wrapper.setState({ books: []}))

  it('shallow renders without crashing', () => {
    expect(shallow(<App />))
  })

  it('mount without crashing', () => {
    expect(mount(<App />))
  })
  
  it('updates a book shelf', () => {
    expect(wrapper.state().books.length).toBe(0)

    wrapper
    .setState({
      books: [ {id:0, title: 'Harry Poha', author: 'Mc Maha', bookCover: 'uri', shelf: 'wantToRead'}]
    })
    .find('select')
    .simulate('change', {target: {value: "read"}})

    expect(wrapper.state().books[0].shelf).toBe('read')
  })
})