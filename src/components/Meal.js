import React from "react";
import { useState, useEffect } from "react";
import MealItem from "./Mealitem";
import Recipe from "./Recipe";

const Meal = () => {
  const [url, setUrl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Meals);
      });
  }, [url]);
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search food recipe</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo
          </h4>
        </div>
        <div className="searchBox">
          <input type="search" className="search-bar" />
        </div>
        <div className="container">
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
          <MealItem />
        </div>
        <div className="indexContainer">
          <Recipe />
        </div>
      </div>
    </>
  );
};
export default Meal;
