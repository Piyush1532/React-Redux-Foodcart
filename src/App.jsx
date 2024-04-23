
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/home'

import Navbar from './Components/Navbar'
import Cards from './Components/Cards'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path="/foodcard/:cat_name" element={<Cards/>}/>
      </Routes>
    </>
  )
}

export default App
