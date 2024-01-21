import logo from './logo.svg';
import './App.scss';
import { ReactDOM } from 'react';
import { BrowserRouter as Router,Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Products from './Products';
import Product from './Product';
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route path='/' element={<><Navbar /><Home /><Footer /></>} ></Route>
      <Route path='/products/:id' element={<><Navbar/><Products/><Footer/></>}></Route>
      <Route path='/product/:id' element={<><Navbar/><Product/><Footer/></>} ></Route>
       </Routes>
        </div>
    </Router>
  );
}

export default App;
