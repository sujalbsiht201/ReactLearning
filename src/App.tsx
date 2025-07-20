import { useState } from "react";
//import { Button } from "./component/atomic.tsx/Button";
//import { Text } from "./component/atomic.tsx/text";
//import { Counter } from "./component/Counter";
//import { Flexbox } from "./component/Flexbox";
//import { Footer } from "./component/Footer";
//import { Heade } from "./component/Header";




function App(){ 

  const [songs,setSongs]= useState([
    {singer:"mohit chauhan",name:"saiyan"},
    "parinda","bekhayali","Co2","Therapy"
    ])

  //const handleAlirt = () => {
    //  alert("save")
  //}

  //const handleAlert = () => {
    //  alert("sujal")
  //}

  return (
    <>
      {/* <div className="m-50 flex justify-center"> */}
         {/* <Button label="click" onClick={handleAlirt}/> */}
         {/* <Button label="save" onClick={handleAlert} /> */}
      {/* </div> */}
      <div className="flex bg-black py-4">
 
        <div className="bg-blue-400 text-white rounded-full mx-4 px-2 hover:bg-green-400">S</div>
        <div className="bg-stone-400 text-white rounded-full mx-4 px-4 hover:bg-green-400">All</div>
        <div className="bg-stone-400 rounded-full text-white mx-4 px-6 hover:bg-green-400">Music</div>
        <div className="bg-stone-400 text-white rounded-full mx-4 px-6 hover:bg-green-400">Podcasts</div>        
      </div>
  
        <h1 className="bg-black text-white"><b>Albums featuring songs you like</b></h1>
      <ul>
      { 
        songs.map((song,idx) => {
          return <li className="bg-blue-200 p-2 border-b">
            
          <i className="fa-solid fa-music"></i>{song}
            
            </li>
        }) 
      }
      </ul>

      <div className="flex justify-between bg-black">
      <div className="flex flex-col text-white m-4"><i className="fa-solid fa-house"></i>Home</div>
        <div className="flex flex-col text-white m-4"><i className="fa-solid fa-magnifying-glass"></i>Search</div>
        <div className="flex flex-col text-white m-4"><i className="fa-solid fa-book"></i>Your Library</div>
        <div className="flex flex-col text-white m-4"><i className="fa-solid fa-coins"></i>Premium</div>
      </div>
    </>
  )

}
export default App;
