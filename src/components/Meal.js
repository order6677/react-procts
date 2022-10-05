import React from "react";
import { useState, useEffect } from "react";
import MealItem from "./Mealitem";
import Recipe from "./Recipe";

const Meal = () => {
  const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [item,setItem]=useState("");
  const[show,setShow]=useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
        
      
      });
  }, [url])
  const setIndex =(bet)=>{
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${bet}`)
  }
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
          
          {
              show ? <MealItem  data={item}/>:"Not found"
          }
        </div>
        <div className="indexContainer">
          <Recipe  betIndex={(bet)=>setIndex(bet)}/>
        </div>
      </div>
    </>
  );
};
export default Meal;
