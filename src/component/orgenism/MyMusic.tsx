import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Container } from "../atomic/Container";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CardList } from "../orgenism/CardList.";
import { PlayList } from "../orgenism/PlayList";
import { useEffect, useState } from "react";
import { Favorate } from "./Favorate";




const Home = () => {
 const [search, setSearch] = useState("");
 const [on, setOn] = useState(false);
 
  function handleClick() {
    setOn(true);
  }

  function handleChange(e) {
    const term = e.target.value;
    setSearch(term);
  }

  return (
    <>
      <Container> 
        <Header
          on={on}
          search={search}
          onChange={handleChange}
          onFocus={handleClick}
          onBlur={() => {
            setOn(false);
          }}
        />
        <CardList />
        <Footer />
      </Container>
    </>
  );
};

const SongPlaylist = ( {songs, setSongs}) => {

  const [search, setSearch] = useState("");
 const [on, setOn] = useState(false);
   

  function handleClick() {
    setOn(true);
  }

  function handleChange(e) {
    const term = e.target.value;
    setSearch(term);
  }

  return (
    <>
      <Container>      
        <Header
         on={on}
          search={search}
          onChange={handleChange}
          onFocus={handleClick}
          onBlur={() => {
          setOn(false);
          }}/> 
        <PlayList songs={songs} setSongs={setSongs} />
        <Footer />
      </Container>
    </>
  );
};

function SongFavorate({songs}){
const favoriteSongs = songs.filter((song) => song.isFavorite);

return <>
   <Favorate songs={favoriteSongs} />
  </>
}
export const MyMusic = () => {
   const [songs , setSongs] = useState([]);

    useEffect(() => {
     fetch("http://localhost:4000/songs")
       .then((res) => res.json())
       .then((data) => setSongs(data));
   }, []);
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<SongPlaylist songs={songs} setSongs={setSongs}/>} />
          <Route path="/favorate" element ={<SongFavorate songs={songs}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}