import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import { FacebookApp } from '@modules/Root'

it('renders correctly', () => {
  	renderer.create(<FacebookApp />)
})
