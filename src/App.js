import React from 'react'
import Meal from './components/Meal';
import "./components/style.css";
import{Routes,Route}from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Meal />}/>
    </Routes>
    </>
      
  
  );
}

export default App;
