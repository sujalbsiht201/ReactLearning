import { useEffect, useState } from "react";
import { Img } from "../atomic/Img";
import { Card } from "../molecule.tsx/Card";
import { Audio } from "../atomic/Audio";
import { SearchBar } from "../atomic/SearchBar";

export const CardList = () => {
  const [songs, setSongs] = useState([]);
  const [showSong, setShowSong] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/songs")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setSongs(res);
      });
  }, []);
  console.log(songs);

  return (
    <>
    <div className="flex justify-center">
      <SearchBar  />
    </div>

      <div className="flex bg-black py-4">
        <div className="bg-blue-400 text-white rounded-full mx-4 px-2 hover:bg-green-400">
          S
        </div>
        <div className="bg-stone-400 text-white rounded-full mx-4 px-4 hover:bg-green-400">
          All
        </div>
        <div className="bg-stone-400 rounded-full text-white mx-4 px-6 hover:bg-green-400">
          Music
        </div>
        <div className="bg-stone-400 text-white rounded-full mx-4 px-6 hover:bg-green-400">
          Podcasts
        </div>
      </div>

      <h1 className="font-bold py-2 text-white bg-black text-3xl px-2">
        Tranding Songs 2025-Best....
      </h1>

      <ul className="flex gap-2 scrollbar-none [scrollbar-width:none] overflow-x-scroll">
        {songs &&
          songs.map((song) => {
            return (
              <>
                <li className=" flex flex-col w-96  justify-center bg-black border p-2">
                  <p className="text-white">{song.language}</p>
                  {!showSong ? (
                    <Img
                      src={song.coverImage}
                      onClick={() => {
                        setShowSong(true);
                      }}
                    />
                  ) : (
                    <Audio url={song.songUrl} />
                  )}
                  <p className="text-stone-400">
                    {song.lyricsSnippet}
                    <i className="fa-regular fa-heart px-4"></i>
                  </p>
                </li>
              </>
            );
          })}
      </ul>
      <Card />
    </>
  );
};
