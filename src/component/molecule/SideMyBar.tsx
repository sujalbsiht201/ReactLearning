import { useState } from "react"
import { Link } from "react-router-dom";

export const SideMyBar=() =>{
  const [open , setOpen] = useState(false);
  function handleClick(){
    setOpen(true)
  }
  return <>

  <button className="bg-blue-400 m-2 px-4 py-2 rounded-lg text-white" onClick={handleClick}>
    <i className="fa-solid fa-bars"></i>
  </button>
  {open && 
  <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-5 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}>
    <span className="flex items-center gap-4">
      <h1 className="font-bold text-2xl mb-6">Playlist MenuBar</h1>
      <i className="fa-solid fa-xmark" onClick={()=>{
        setOpen(false)
      }}></i>
    </span>
    <ul className="space-y-4">
    <div className="flex items-center gap-2 hover:bg-gray-600">
    <i className="fa-solid fa-house"></i>
    <li>home</li>
    </div>
    <Link to="/favorate">
    <div className="flex items-center gap-2 hover:bg-gray-600">
    <img src="https://c.saavncdn.com/073/My-Favorite-Song-English-2017-20181030074532-500x500.jpg" className="w-10 h-10 rounded-lg"/>
    <li>favorate</li>
    </div>
    </Link>
    {/* <li>Playlist</li> */}
  </ul>
 </div>
}

  </>
}
