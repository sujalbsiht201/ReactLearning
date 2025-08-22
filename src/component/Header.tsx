import { useEffect, useState } from "react";
import { SearchBar } from "./atomic/SearchBar";
import { SideMyBar } from "./molecule/SideMyBar";


export const Header = ({onChange , onFocus , onBlur , search , on}) => {
    const [songs, setSongs] = useState([]);
  
    useEffect(() => {
      if (search !== "") {
        fetch("http://localhost:4000/songs")
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            setSongs(res);
          });
      }
    }, [search]);
    console.log(songs);
  
    const filteredSongs = songs.filter((song) =>
      song.title.toLowerCase().includes(search.toLowerCase())
    )
  
  
  return (
    <>
       {on && (
          <div className="flex justify-center items-center w-full">
            {filteredSongs.length > 0 ? (
              <ul className="shadow-lg w-240 h-50 border bg-stone-400 overflow-y-scroll rounded-lg text-white scrollbar-none [scrollbar-width:none]">
                {songs &&
                  filteredSongs.map((song) => {
                    return (
                      <>
                        <li
                          key={song.id}
                          className="hover:bg-stone-600 cursor-pointer py-8px text-2xl flex"
                        >
                          <div className="flex gap-2">
                            <img
                              src={song.coverImage}
                              className="w-12 h-12 object-cover rounded py-2 gap-2"
                            />
                            {song.title}
                            <span className="py-2px ">
                              <i className="fa-solid fa-music text-rose-400"></i>
                            </span>
                          </div>
                        </li>
                      </>
                    );
                  })}
              </ul>
            ) : (
              <p>No songs found.</p>
            )}
          </div>
        )} 
      <div className="fixed top-0 left-0 w-full z-10">
        <header className="bg-black p-4 flex flex-row justify-between">
         <div>
            <h1 className="font-extrabold text-white text-3xl px-2">MyMusic</h1>
            <h4 className="text-white px-2">dil se suno</h4>
             <SideMyBar/>
         </div>       
          <div className="flex justify-center">
            <SearchBar onChange={onChange} onFocus={onFocus} onBlur={onBlur}/>
          </div>
           <div className="bg-blue-400 text-lg text-white rounded-full m-2 px-2 py-2 hover:bg-green-400 w=10">
            <h1 className=" px-3 font-bold"> S </h1>
            </div>
        </header>
      </div>
    </>
  );
};
