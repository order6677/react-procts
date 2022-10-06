import React from 'react';
import Meal from './components/Meal';
import "./components/style.css";
import{Routes,Route}from "react-router-dom"
import Recipeinfo from './components/Recipeinfo';
import Navbar from"./components/Navbar";

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
