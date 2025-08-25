import { useEffect, useRef, useState } from "react";
import { Img } from "../atomic/Img1";
import { Card } from "../molecule/Card";
import { Audio } from "../atomic/Audio";
import { Link, useActionData } from "react-router-dom";
import { PlayTable } from "../atomic/PlayTable";
import { Tabs } from "../atomic/Tabs";

export const CardList = () => {
  const [songs, setSongs] = useState([]);
  const [showSong, setShowSong] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  // const playerRef=useRef(null);

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

  

  function handleClick(e, index, id) {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation(); // Stop bubbling to Link
    setSelectedSong(songs.find((song) => song.id === id));
    console.log(index);
    setShowTable(true);
    // setTimeout(() => playref.current?.play(), 0);
  }

  return (
    <main className="p-4">
        <Tabs/>
      <h1 className="font-bold py-2 text-white bg-stone-600 text-3xl px-2">
        Tranding Songs 2025-Best....
      </h1>

      <ul className="flex gap-2 scrollbar-none [scrollbar-width:none] overflow-x-scroll bg-stone-600">
        {songs &&
          songs.map((song, index) => {
            return (
              <>
                <Link to="playlist">
                  <div className="">
                    <li className=" flex flex-col w-54  justify-center bg-stone-600 p-2 relative">
                      <p className="text-white">{song.language}</p>
                      {!showSong ? (
                        <Img
                          src={song.coverImage}
                          onClick={() => {
                            setShowSong(true);
                          }}
                          cls="cursor-pointer h-42"
                        />
                      ) : (
                        <Audio url={song.songUrl} />
                      )}
                      <div
                        className="bg-green-400 w-14 h-14 rounded-full flex justify-center p-2 items-center absolute bottom-12 right-10"
                        onClick={(e) => handleClick(e, index, song.id)}
                      >
                        <i className="fa-solid fa-play text-xl"></i>
                      </div>
                      <p className="text-white py-2 px-2 truncate">
                        {song.lyricsSnippet}
                        <i className="fa-regular fa-heart px-4"></i>
                      </p>
                    </li>
                  </div>
                </Link>
              </>
            );
          })}
      </ul>
      <Card />
      {showTable && <PlayTable song={selectedSong}/>}
      {/* <div style={{ marginBottom: '200px' }}>
        <button onClick={() => playerRef.current?.play()}>
          ▶ Play (External)
        </button>
        <button onClick={() => playerRef.current?.pause()} style={{ marginLeft: '10px' }}>
          ⏸ Pause (External)
        </button>
      </div>
     {showTable && <Audio song={selectedSong} ref={playerRef}/>}
      */}
    </main>
  );
};
 