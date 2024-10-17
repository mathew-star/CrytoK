import React from 'react'
import  {Router, Link} from 'react-router-dom'
import { Typography,Layout,Space } from 'antd'
import Navbar from './components/Navbar'

 
const App = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <Navbar/>
      <main>
        <h1></h1>
      </main>
    </div>
  )
}

export default App
