import { useState } from "react"

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
    <li>home</li>
    <li>favorate</li>
  </ul>
 </div>
}

  </>
}
