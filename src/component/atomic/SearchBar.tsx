export const SearchBar=({onChange , onFocus , onBlur})=>{
    return <>
        <div className="flex flex-col w-96 justify-center relative bg-black">
          <i className="text-black text-2xl fa-solid fa-magnifying-glass absolute left-6 top-5"></i>

            <input className="flex bg-stone-400 border py-4 px-14 text-xl rounded-full text-white" placeholder="Search" onChange={onChange} onFocus={onFocus} onBlur={onBlur}/>
          
        </div>
        
    </>
}   

// sidebar:
// function SideMyBar({ onClick }) { 
//   return <>
//     <div className="bg-teal-500 w-64 fixed top-0 bottom-0 right-0 flex flex-row justify-end" onClick={onClick}>
//       <span className="hover:bg-red-500 h-6 w-6 flex justify-center items-center hover:rounded-full cursor-pointer" >x</span>
//     </div>
//   </>
// }
// const [isVisible, setIsVisible] = useState(false)
// { isVisible &&
//       <SideMyBar onClick={() => setIsVisible(false)}/>
//     }
// <h1 onClick={() => setIsVisible(true) }>Click</h1>




// import React, { useState } from "react";

// export const SideMyBar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex">
//       {/* Toggle Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="p-2 m-2 bg-blue-500 text-white rounded-md"
//       >
//         {open ? "Close" : "Menu"}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-5 transition-transform duration-300 ${
//           open ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <h2 className="text-2xl font-bold mb-6">Sidebar Menu</h2>
//         <ul className="space-y-4">
//           <li className="hover:bg-gray-700 p-2 rounded">Home</li>
//           <li className="hover:bg-gray-700 p-2 rounded">About</li>
//           <li className="hover:bg-gray-700 p-2 rounded">Services</li>
//           <li className="hover:bg-gray-700 p-2 rounded">Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// };
