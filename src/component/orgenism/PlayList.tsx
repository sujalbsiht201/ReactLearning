import { useRef, useState } from "react";
import { Img } from "../atomic/Img1";
import { Audio } from "../atomic/Audio";


export const PlayList = ({songs , setSongs}) => {
  
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

  const toggleFavorite = (id) => {
  setSongs((prev) =>
    prev.map((song) =>
      song.id === id
        ? { ...song, isFavorite: !song.isFavorite }
        : song
    )
  );
};


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
            <i
              className={`fa-solid fa-heart cursor-pointer ${
                song.isFavorite ? "text-red-500" : "text-black"
              }`}
              onClick={() => toggleFavorite(song.id)}
            ></i>
          </li>
        ))}
      </ul>

      {/* Single audio player at the bottom */}
      <Audio song={selectedSong} ref={audioPlayer} />
    </>
  );
};
