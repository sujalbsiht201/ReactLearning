import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavoriteSongs } from "./component/molecule/FavoriteSongs";

import { MyMusic } from "./component/orgenism/MyMusic";
import { Login } from "./component/orgenism/Login";


// const MyMusicSong = () =>{
//   return<>
//   <MyMusic/>
//   </>
// }

// const MyLoginPage = () =>{
//   return<>
//   <Login/>
//   </>
// }

function App() {
  return (  
    <div className="gap-2"> 
      <MyMusic/>  
      {/* {/* <BrowserRouter>
        <Routes>
          
          <Route path="/myMusic" element={<MyMusicSong />} />
          <Route path="/loginPage" element ={<MyLoginPage/>}/>
        </Routes>
      // </BrowserRouter> */}
    </div>
    
  );
}

export default App;
