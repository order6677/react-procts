import React from "react";
import { useState, useEffect } from "react";
import MealItem from "./Mealitem";
import Recipe from "./Recipe";

const Meal = () => {
  const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [item,setItem]=useState("");
  const[show,setShow]=useState(false);
  const[search,setSearch]=useState("")
 
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
  const searchRecipe=(evt)=>{
    if(evt.key==="Enter"){
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      
    }
  }
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search food recipe</h1>
          <h4>
            welcome to bahaba recipe  
          </h4>
        </div>
        <div className="searchBox">
          <input type="search" className="search-bar"onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
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
