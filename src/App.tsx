import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { Events } from './pages/Events'
import { Fruits } from './pages/Fruits'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <NavLink to={"/"} >Home</NavLink>
        <NavLink to={"/fruits"} >Fruits</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Events />} />
        <Route path='/fruits' element={<Fruits />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
