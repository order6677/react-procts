
import React from 'react'
 const Recipe=({betIndex})=>{
    const alp =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let num=0;
    return (
        <>
        {
             alp.map(item=>{
                return(
                    <div className="numBox" key={num++}onClick={()=>betIndex(item)}>
                        <h3>{item}</h3>
                    </div>
                )
             })
        }
        </>
      
    )
 }
  
export default Recipe;