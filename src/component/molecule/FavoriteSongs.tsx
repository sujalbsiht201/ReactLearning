import React, { useState } from "react";

export const FavoriteSongs= () => {
  const [songs] = useState([
    { id: 1, title: "Song One", artist: "Artist A" },
    { id: 2, title: "Song Two", artist: "Artist B" },
    { id: 3, title: "Song Three", artist: "Artist C" }
  ]);

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((songId) => songId !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Songs</h1>
      <ul className="space-y-3">
        {songs.map((song) => (
          <li
            key={song.id}
            className="flex justify-between items-center p-3 bg-gray-100 rounded shadow"
          >
            <div>
              <p className="font-semibold">{song.title}</p>
              <p className="text-gray-600">{song.artist}</p>
            </div>
            <button
              onClick={() => toggleFavorite(song.id)}
              className={`p-2 rounded-full ${
                favorites.includes(song.id) ? "bg-red-500 text-white" : "bg-gray-300"
              }`}
            >
              {favorites.includes(song.id) ? "♥" : "♡"}
            </button>
          </li>
        ))}
      </ul>

      {/* Favorites Section */}
      <h2 className="text-xl font-bold mt-6 mb-4">Favorite Playlist</h2>
      {favorites.length === 0 ? (
        <p>No favorite songs yet.</p>
      ) : (
        <ul className="space-y-2">
          {songs
            .filter((song) => favorites.includes(song.id))
            .map((fav) => (
              <li key={fav.id} className="p-2 bg-yellow-100 rounded shadow">
                {fav.title} - {fav.artist}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

