import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Container } from "../atomic/Container";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CardList } from "../orgenism/CardList.";
import { PlayList } from "../orgenism/PlayList";
import { useState } from "react";



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

const SongPlaylist = () => {

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
        <PlayList />
        <Footer />
      </Container>
    </>
  );
};

export const MyMusic = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<SongPlaylist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}