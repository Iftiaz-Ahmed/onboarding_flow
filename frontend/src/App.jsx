import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AdminPage from './pages/AdminPage'
import DataTable from './pages/DataTable'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/data' element={<DataTable />} />
      </Routes>
    </div>
  )
}

export default App
