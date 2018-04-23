import React from 'react'

import Words from './Words'
import AddWord from './AddWord'
import AddImage from './AddImage'
import Images from './Images'

const App = () => (
  <div className='app-container'>
    <Words />
    <AddWord />
    <br/>
    <AddImage />
    <Images />
  </div>
)

export default App
