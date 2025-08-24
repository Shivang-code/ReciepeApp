import { useRef } from 'react';
import { X } from 'lucide-react';

function Cart({ meal, onClose }) {
  const cartRef = useRef();

  const closeCart = (e) => {
    if (cartRef.current === e.target) {
      onClose();
    }
  }


  return (
    <div ref={cartRef} onClick={closeCart} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className='relative bg-white rounded-xl shadow-2xl w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8'>

        <button onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-purple-400"> <X size={28} /></button>

        <div className="flex flex-col items-center gap-3">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-4 border-purple-400" />
          <h2 className="text-2xl font-bold text-purple-700 text-center">{meal.strMeal}</h2>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {Object.keys(meal)
              .filter((key) => key.startsWith("strIngredient") && meal[key])
              .map((key) => (
                <li key={key}>
                  {meal[key]} - {meal[`strMeasure${key.slice(13)}`]}
                </li>
              ))}
                  </ul>
        </div>
            <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Instructions:</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {meal.strInstructions}
          </p>
        </div>
      
      </div>
    </div>
  )
}

export default Cart
