import React from "react";

const Meal = () => {
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search food recipe</h1>
          <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
             nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim. Donec pede justo,
             fringilla vel, aliquet nec
          </h4>
        </div>
        <div className="searchBox">
            <input type ="search" className ="search-bar" />

        </div>
      </div>
    </>
  );
};
export default Meal;