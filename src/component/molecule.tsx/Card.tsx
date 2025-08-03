import { useEffect, useState } from "react";
import { Img } from "../atomic/Img";

export const Card = () => {
  const [albums, setAlbums] = useState([0]);
  useEffect(() => {
    fetch("http://localhost:4000/albums")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setAlbums(res);
      });
  }, []);
  return (
    <>
      <h1 className="font-bold py-2 text-white bg-black text-3xl px-2">
       Albums....
      </h1>
      
      <ul className="flex gap-2 scrollbar-none [scrollbar-width:none] overflow-x-scroll">
        {albums&&
          albums.map((albums) => {
            return (
              <>
                <li className="flex flex-col w-96  justify-center bg-black border p-2">
                  <p className="text-white">{albums.title}</p>
                  <Img src={albums.cover} cls="cursor-pointer h-32"/>
                  <p className="text-white">{albums.releaseYear}</p>
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
};
