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
