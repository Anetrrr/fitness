import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Box width="400px" sx={{width: { x1: '1488px'}}} m='auto' >
      <Navbar/>
      <Routes>
       <Route path='/' exact element={<Home/>}/>
       <Route path='/exercise/:id'  element={<ExerciseDetail/>}/>
       <Route path='/footer'  element={<Footer/>}/>

      </Routes>

    <Footer/>
    </Box>
  );
}

export default App;
