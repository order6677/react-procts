import React from 'react'
 const Mealitem =({data})=>{
  console.log(data)
  return (
    <>
    {

      (!data)?"Not found": data.map(item => {
        return(

    <div className='card'>
    <img src ={item.strMealThumb} alt=""/>
    <h3>{item.strMeal}</h3>
  </div>

        )
      })
    }


    </ >
  )
}

export default Mealitem