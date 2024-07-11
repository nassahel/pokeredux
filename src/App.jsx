import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import PokemonDescription from './Pages/PokemonDescription'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/description/:name' element={<PokemonDescription />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
