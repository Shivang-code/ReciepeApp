import { useRef } from 'react';
import { X } from 'lucide-react';

function Cart({meal,onClose}) {
     const cartRef=useRef();

     const closeCart=(e)=>{
             if(cartRef.current===e.target)
             {
                onClose();
             }
     }


    return (
      <div ref={cartRef} onClick={closeCart} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className='mt-10 flex flex-col gap-5 text-white'>
            <button  onClick={onClose}  className="place-self-end"> <X size={30}/></button>
        </div>
        <div className='bg-indigo-600 rounded-xl px-20 py-10 flex felx-col gap-5 items-center mx-14'>
        <div className="flex flex-col">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-60 h-60 md:w-60 md:h-60 rounded-full object-cover" />
        <h2 className="text-lg md:text-2xl font-bold text-center">{meal.strMeal}</h2>
        </div>
      <div className="flex flex-col">
        <h3 className="text-md md:text-lg font-semibold mt-2">Ingredients:</h3>
        <ul className="list-disc list-inside">
          {Object.keys(meal)
            .filter((key) => key.startsWith("strIngredient") && meal[key])
            .map((key) => (
              <li key={key}>
                {meal[key]} - {meal[`strMeasure${key.slice(13)}`]}
              </li>
            ))}
            <p><strong>Instructions: </strong></p>
                 <p  className="max-h-32 overflow-y-auto text-sm md:text-base leading-6"
                 >{meal.strInstructions}</p>
        </ul>
        </div>
        </div>
      </div>
    )
  }
  
  export default Cart
