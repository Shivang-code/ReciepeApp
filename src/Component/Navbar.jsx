import { useState } from "react"


function Navbar({searchText}) {
  const [value,setvalue]=useState("");
  
const contentHandler=()=>{

 searchText(value)
}

  return (
    <div>
      <header>
        <nav className="bg-[#212121] p-[20px] flex justify-between items-center z-1">
            <h1 className="cursor-pointer text-[26px] font-bold tracking-[1px] uppercase">Reciepe App</h1>
            <div className="flex mr-[10px]">
         <input type="text" placeholder="Search for Reciepes.... " className="flex-grow mr-[10px] border-0 text-[18px] p-[10px] runded-[4px] text-black " 
        value={value}
        onChange={(e)=>setvalue(e.target.value)}
        />
         <button type="submit" className="border-none text-[18px] p-[10px] rounded-[4px] bg-[#f44336] text-white hover:bg-[#ff5c5c] cursor-pointer transition duration-200 ease-in-out"
         onClick={contentHandler}
        >Search</button>
            </div>
        </nav>
      </header>

      </div>
   
  )
}


export default Navbar
