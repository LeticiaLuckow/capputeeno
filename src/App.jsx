import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import GlobalStyle from '../globalStyles';
import Product from './pages/Product/Product';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
