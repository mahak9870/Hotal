import "./App.css";

import Cart from "./components/Cart";

import HeaderContainer from "./Containers/HeaderContainer";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {

  return (
    <div>
      <Router>  
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
