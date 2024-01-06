import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

export default function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Login />}/>
      <Route path={'/register'} element={<Register />}/>
    </Routes>
      
  )
}
