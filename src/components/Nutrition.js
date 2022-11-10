import React from "react";

const Nutrition = () => {
  return (
    <div className="nutrition">
      <div className="calorie-wrapper">
        <div className="calorie">1930kCal</div>
        <span>Calories</span>
      </div>
      <div className="protein-wrapper">
        <div className="protein">155g</div>
        <span>Protéines</span>
      </div>
    

      <div className="carbo-wrapper">
        <div className="carbo">290g</div>
        <span>Glucides</span>
      </div>


      <div className="lipid-wrapper">
        <div className="lipid">290g</div>
        <span>Lipides</span>
      </div>
    </div>
  );
};

export default Nutrition;
