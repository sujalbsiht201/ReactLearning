import { useState } from "react";
//import { Text } from "../component/atomic.tsx/Text";
export const List=()=>{
     const [songs,setSongs]= useState([
        {singer:"mohit chauhan",name:"saiyan"},
        {singer:"Mohit chauhanname",name:"parinda"},
        {singer:"bital",name:"bekhayali"},
        {singer:"harry",name:"Co2"},
        {singer:"justin",name:"Therapy"}
        ])
    return <>
    <div className="flex bg-black py-4">
     
            <div className="bg-blue-400 text-white rounded-full mx-4 px-2 hover:bg-green-400">S</div>
            <div className="bg-stone-400 text-white rounded-full mx-4 px-4 hover:bg-green-400">All</div>
            <div className="bg-stone-400 rounded-full text-white mx-4 px-6 hover:bg-green-400">Music</div>
            <div className="bg-stone-400 text-white rounded-full mx-4 px-6 hover:bg-green-400">Podcasts</div>        
          </div>
          <div className="bg-black">
          <div className="flex">
          </div>
          </div>
            <h1 className="bg-black text-white"><b>Albums featuring songs you like</b></h1>
          <ul>
          { 
            songs.map((song,idx) => {
              return <li className="bg-blue-200 p-2 border-b">
                <i className="fa-solid fa-music"></i>
                
                <div>{ song.name }</div>
                <div>{ song.singer}</div>
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
}