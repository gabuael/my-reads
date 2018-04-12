import React from 'react'
import { shallow, mount } from 'enzyme'
import List from '../components/List';

describe('<List />', () => {

   it('shallow renders without crashing', () => {
      expect(shallow(<List />))
   })

   it('mounts correctly', () => {
      expect(mount(<List />))
   })

   const books = [{id:0, title: 'Harry Potter', authors: ['J. K. Rowling'], imageLinks: {'smallThumbnail': 'uri'}, shelf: 'read'}]
   it('renders list items', () => {
      const component = mount(<List books={books} />);

      expect(component.find('li').length).toBe(1);
   })

   it('change status', () => {
      const updateShelf = jest.fn();
      const component = mount(<List books={books} updateShelf={updateShelf}/>)
      component.find('select').simulate('change')
      expect(updateShelf).toHaveBeenCalledTimes(1)
   })
})