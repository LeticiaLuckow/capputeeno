
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import GlobalStyle from '../globalStyles'



function App() {

  return (
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
