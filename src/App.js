import React, { useState ,Fragment} from "react";
import Meal from "./components/Meal";
import "./components/style.css";
import { Routes, Route ,useNavigate} from "react-router-dom";
import Recipeinfo from "./components/Recipeinfo";
import Navbar from "./components/Navbar";




function App() {     
  const navigate= useNavigate()
  
  const[foods,setfood]=useState([]);
  
  const addfood = food =>setfood([...foods,food])

  return (
     <Fragment>
      <Navbar></Navbar>
      <Routes>
        
      
        
        <Route path ="/"element={<Meal/>} />
        <Route path ="/:Mealid"element={<Recipeinfo/>} />
      </Routes>
     </Fragment>
    
    

    
  );
}

export default App;
