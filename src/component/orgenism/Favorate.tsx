import { useRef, useState } from "react";
import { Img } from "../atomic/Img1"
import { Audio } from "../atomic/Audio";

export const Favorate=({songs})=>{
    const [playingIndex, setPlayingIndex] = useState(null);
    const [selectedSong, setSelectedSong] = useState(null);
    const audioPlayer = useRef(null);

    function handleClick(index, id) {
    if (playingIndex === index) {
      audioPlayer.current?.pause();
      setPlayingIndex(null);
    } else {
      setSelectedSong(songs.find((song) => song.id === id));
      setPlayingIndex(index);

      // Play after source is updated
      setTimeout(() => audioPlayer.current?.play(), 0);
    }
  }


    return<>
     <div className="mt-6 h-screen bg-black">
      <div className="bg-stone-400">
      <h2 className="text-2xl mb-2 font-bold  text-white bg-green-800 p-4">Favorite Songs....</h2>
      {songs.length === 0 ? (
        <p>No favorite songs yet.</p>
      ) : (
        <ul>
        {songs.map((song , index) => 
        <li  key={song.id} className="flex items-center bg-stone-400 border-b gap-2 p-2" >
          {/* <div className="flex gap-2 bg-stone-400"> */}
               {playingIndex === index ? (
              <i
                className="fa-solid fa-pause cursor-pointer"
                onClick={() => handleClick(index, song.id)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-play cursor-pointer"
                onClick={() => handleClick(index, song.id)}
              ></i>
            )}

          <Img src={song.coverImage}/>
           <div className="flex flex-col">
              <p>{song.title}</p>
              {song.lyricsSnippet}
            </div>
          {/* </div> */}
        </li>
        )}
        </ul>
      )}
      </div>
    </div>
     <Audio song={selectedSong} ref={audioPlayer} />
        
    </>
}