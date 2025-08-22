import { useEffect, useState } from "react"
import { Img } from "../atomic/Img1";

export const Artists = () =>{
    const [artists , setArtists] = useState([])
    const [songs , setSongs] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/artists").
        then((res)=>{
            return res.json(); 
        }).
        then((res)=>{
            setArtists(res);
        })
    },[]);

    useEffect(()=>{
        fetch("http://localhost:4000/songs").
        then((res)=>{
            return res.json();
        }).
        then((res)=>{
            setSongs(res);
        })
    },[]);

    const findImg = (id) => {
        console.log(id)
       return songs.find((song)=>song.id===id)?.coverImage;
        
    }
   
    return <>
        <h1 className="text-white font-bold text-3xl bg-stone-600 p-2">Artists....</h1>

        <ul className="flex w-full scrollbar-none [scrollbar-width:none] overflow-x-scroll">
           {artists && artists.map((artist) => {
            return<>
            <li 
              key={artist.id}
              className="flex flex-col w-66  justify-center bg-stone-600 p-2">
            <Img src={ findImg(artist.id) }/>
            <div className="text-white">{artist.name}</div> 
            <div className="truncate">{artist.bio}</div>
            </li>
            </>
           })   
        }
        </ul>
    </>
}