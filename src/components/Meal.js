import React from "react";
import MealItem from "./Mealitem"

const Meal = () => {
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search food recipe</h1>
          <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
            
          </h4>
        </div>
        <div className="searchBox">
            <input type ="search" className ="search-bar" />

        </div>
        <div className="container">
          <MealItem />
        
        </div>
       
       </div>
    </>
  );
};
export default Meal;