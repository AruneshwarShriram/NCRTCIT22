/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Nav from "./comp/nav";
import { Container } from 'postcss';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './comp/home';
function App() {
  return (
    <div class="bg-blue-400">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
        </Routes>
      </BrowserRouter>
        
        
      </div>
      

     
    
  );
}

export default App;
