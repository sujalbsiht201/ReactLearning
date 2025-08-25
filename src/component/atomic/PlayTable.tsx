import { forwardRef, useRef, useState } from "react";

export const PlayTable =({ song }) => {
  // console.log(ref);
  const [playPause, setPlayPause] = useState(true);
  const playerRef= useRef(null);
  function handleClick() {
    setPlayPause(false);
    playerRef.current?.play(); 
  }
  return (
    <>
      <div className="flex w-full justify-between bg-gray-600 py-2 fixed left-0 bottom-0 items-center">
        <div className="flex gap-4 items-center px-4">
          <img
            src={song.coverImage}
            alt={song.title}
            className="w-12 h-12 object-cover rounded"
          />

          <h4 className="font-semibold">{song.title}</h4> 
        </div>
        
          <div className="flex gap-2">
            <div>
              <i className="fa-solid fa-backward text-lg"></i>
            </div>
            <div>
              {playPause ? (
                <i
                  className="fa-solid fa-play text-lg"
                  onClick={handleClick}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-pause text-lg"
                  onClick={() => {
                    setPlayPause(true);
                    playerRef.current?.pause();
                  }}
                ></i>
              )}
            </div>
            <div>
              <i className="fa-solid fa-forward text-lg"></i>
            </div>
          </div>
        <div className="p-6">
            <i className="fa-solid fa-ellipsis-vertical text-2xl"></i>
        </div>
      </div>
       <audio ref={playerRef} src={song.songUrl} controls className="ml-auto hidden" />
    </>
  );
};
