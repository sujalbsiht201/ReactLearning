import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Container } from "./component/atomic/Container";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { CardList } from "./component/orgenism/CardList.";
import { useEffect, useRef, useState } from "react";
import { Img } from "./component/atomic/Img";
import { Audio } from "./component/atomic/Audio";

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <CardList />
        <Footer />
      </Container>
    </>
  );
};

const PlayList = () => {
  const [songs, setSongs] = useState([]);
  // const [showSong, setShowSong] = useState(false);
  const [play, setPlay] = useState([]);
  const [selectedSong, setSelectedSong] = useState();
  console.log(play);
  const audioPlayer = useRef(null);

  useEffect(() => {
    fetch("http://localhost:4000/songs")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setSongs(res);
        setPlay(Array(res.length).fill(true));
      });
  }, []);

  function handleClick(index, id) {
    // setPlay(play[index] ? false:true);
    const temp = [...play];
    if (temp[index]) {
      temp[index] = false;
      audioPlayer.current?.play()
    } else {
      temp[index] = true;
       audioPlayer.current?.pause() 
    }
    console.log(temp, play);
    setPlay(temp);
    songs && setSelectedSong(songs.filter((song) => song.id == id));
  }
  return (
    <>
      {songs.map((song, index) => {
        return (
          <>
            <li className="flex items-center bg-stone-400 border-b gap-2 p-2">
              {play[index] ? (
                <i
                  className="fa-solid fa-play"
                  onClick={() => {
                    handleClick(index, song.id);
                  }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-pause"
                  onClick={() => {
                    handleClick(index, song.id);
                  }}
                ></i>
              )}

              <Img src={song.coverImage} />

              <div className="flex flex-col">
                <p>{song.title}</p>
                {song.lyricsSnippet}
              </div>
            </li>
          </>
        );
      })}
      {selectedSong && <Audio song={selectedSong[0]} ref={audioPlayer}/>}
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/playlist" element={<PlayList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
