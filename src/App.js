import React from "react";
import Meal from "./components/Meal";
import "./components/style.css";
import { Routes, Route } from "react-router-dom";
import Recipeinfo from "./components/Recipeinfo";
import Navbar from "./components/Navbar";
import Form from "react";

function App() {
  return (
    <>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/:MealId" element={<Recipeinfo />} />
      </Routes>
    </>
  );
}

export default App;
