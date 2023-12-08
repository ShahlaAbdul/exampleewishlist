
import './App.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Wishlist from './Pages/Wishlist';
import './resety.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
      <BrowserRouter >
        <Routes>
          <Route path="/"  element={<Home></Home>}/>
          <Route path="/basket"  element={<Shop></Shop>}/>
          <Route path="/wishlist"  element={<Wishlist></Wishlist>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
