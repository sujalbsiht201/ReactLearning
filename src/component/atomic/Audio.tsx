import { forwardRef } from "react";

export const Audio = forwardRef(({ song }, ref) => {
  if (!song) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow p-4 z-50">
      <div className="flex items-center gap-4">
        <img
          src={song.coverImage}
          alt={song.title}
          className="w-12 h-12 object-cover rounded"
        />
        <div>
          <h4 className="font-semibold">{song.title}</h4> 
          <p className="text-sm text-gray-500">{song.artist}</p>  
        </div>
        <audio ref={ref} src={song.songUrl} controls className="ml-auto" />
      </div>
    </div>
  );
});


// npm install react-router-dom
// npm install clsx
// npm install json-server