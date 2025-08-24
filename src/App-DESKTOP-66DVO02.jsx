import './App.css'
import Navbar from './Component/Navbar'
import { useEffect, useState } from "react";
import Content from './Component/Content';

function App() {
  const [term,setTerm]=useState('');
  const [reciepe, setReciepe] = useState();
  const [isLoading,setIsLoading]=useState(true);
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then((res) => res.json())
        .then((data) => {
          setReciepe(data);
          setIsLoading(false);
        }).catch(error=>console.log(error));
        
    }, [term]);


    console.log(reciepe)
  return (
    
    <div>
    
  
    <Navbar searchText={(text)=>setTerm(text)}/>
    {!isLoading && reciepe.length===0 && <h1 className="text-5xl text-center mx-auto mt-32">No images Found</h1>}

  
  {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading....</h1>:<div className="grid grid-cols-3 gap-4">
        {
          reciepe.meals.map(meal=>(<Content key={meal.idMeal} meal={meal}/>))
        }
      </div>}
    </div>
  )
}

export default App
