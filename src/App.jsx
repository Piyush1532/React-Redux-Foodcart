
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/home'

import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import FoodCart from './Components/FoodCart'



function App() {
  return (
    <>
    <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path="/foodcard/:cat_name" element={<Cards/>}/>
          <Route exact path="/foodCart" element={<FoodCart/>}/>
      </Routes>
    </>
  )
}

export default App
