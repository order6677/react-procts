import React from 'react';
import Navbar from"./components/Navbar";
import Meal from './components/Meal';
import "./components/style.css";
import{Routes,Route}from "react-router-dom"
import Recipeinfo from './components/Recipeinfo';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Meal />}/>
    <Route path='/:MealId'element={<Recipeinfo/>}/>
    </Routes>

    <React.Fragment>
      <Navbar />
    </React.Fragment>
    </>
    
  
  );
}

export default App;
