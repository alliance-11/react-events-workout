import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Change } from './pages/Change'
import { Click } from './pages/Click'
import { Fruits } from './pages/Fruits'
import { Submit } from './pages/Submit'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"/click"} >Click</NavLink>
          <NavLink to={"/change"} >Change</NavLink>
          <NavLink to={"/submit"} >Submit</NavLink>
          <NavLink to={"/fruits"} >Fruits</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={
            <>
              <h1>Welcome to Events Workshop</h1>
              <img src="https://media.giphy.com/media/SNDwO2359T7FYU9bzr/giphy.gif" />
            </>
          } 
          />
          <Route path='/click' element={<Click />} />
          <Route path='/change' element={<Change />} />
          <Route path='/submit' element={<Submit />} />
          <Route path='/fruits' element={<Fruits />} />
        </Routes>
      </div>

    </BrowserRouter>
  )

}

export default App
