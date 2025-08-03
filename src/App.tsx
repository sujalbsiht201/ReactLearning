import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Container } from "./component/atomic/Container";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { CardList } from "./component/orgenism/CardList.";
import { PlayList } from "./component/orgenism/PlayList";

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

const SongPlaylist = () => {
  return (
    <>
      <Container>
        <Header />
        <PlayList />
        <Footer />
      </Container>
    </>
  );
}

function App() {
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

export default App;
