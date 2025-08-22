import { useEffect, useRef, useState } from "react";
import { Img } from "../atomic/Img1";
import { Audio } from "../atomic/Audio";

export const PlayList = () => {

  const [songs, setSongs] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  const audioPlayer = useRef(null);
 
  useEffect(() => {
    fetch("http://localhost:4000/songs")
      .then(res => res.json())
      .then(data => setSongs(data));
  }, []);

  function handleClick(index, id) {
    if (playingIndex === index) {
      audioPlayer.current?.pause();
      setPlayingIndex(null);
    } else {
      setSelectedSong(songs.find(song => song.id === id));
      setPlayingIndex(index);

      // Play after source is updated
      setTimeout(() => audioPlayer.current?.play(), 0);
    }
  }

  return (
    <>
      <ul>
        {songs.map((song, index) => (
          <li
            key={song.id}
            className="flex items-center bg-stone-400 border-b gap-2 p-2"
          >
          
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

            <Img src={song.coverImage} />
            
            <div className="flex flex-col">
              <p>{song.title}</p>
              {song.lyricsSnippet}
            </div>    
                <i className="fa-solid fa-heart"></i>
          </li>
        ))}
      </ul>

      {/* Single audio player at the bottom */}
      <Audio song={selectedSong} ref={audioPlayer} />
    </>
  );
};
