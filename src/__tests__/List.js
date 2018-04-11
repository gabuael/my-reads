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

   const books = [{id:0, title: 'Harry Potter', author: 'J. K. Rowling', bookCover: 'uri', status: 'read'}]
   it('renders list items', () => {
      const component = mount(<List books={books} />);

      expect(component.find('li').length).toBe(1);
   })

   it('change status', () => {
      const updateStatus = jest.fn();
      const component = mount(<List books={books} updateStatus={updateStatus}/>)
      component.find('select').simulate('change')
      expect(updateStatus).toHaveBeenCalledTimes(1)
   })
})