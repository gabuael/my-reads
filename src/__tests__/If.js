import React from 'react'
import { shallow } from 'enzyme'
import If from '../components/If'

describe('<If />', () => {
   it('shallow renders without crashing', () => {
      expect(shallow(<If />))
   })
})