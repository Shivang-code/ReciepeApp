import { useState } from "react";
import Cart from "./Cart";

function Content({meal}) {
  const [showDetails, setShowDetails] = useState(false);
const handleButtonClick=()=>{
  setShowDetails(true);
}

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
   <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full"/>
   <div className="px-6 py-4">
    <div className="font-bold text-purple-500 text-xl mb-2">
      {meal.strMeal}
    </div>
    <ul >
      <li>
        <strong>Area: </strong>
        {meal.strArea}
      </li>
      <li>
        <strong>Category: </strong>
        {meal.strCategory}
      </li>

    </ul>
    <button
          onClick={handleButtonClick}
          className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          View Recipe
        </button>
   </div>
   {showDetails && <Cart meal={meal} onClose={()=>setShowDetails(false)}/>}
    </div>
  )
}

export default Content
