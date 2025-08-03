//import { Button } from "./component/atomic.tsx/Button";
// import {Login} from "./component/orgenism.tsx/Login";
// import { CreateNew } from "./component/orgenism.tsx/CreateNew";
//  import { ImageSlider } from "./component/orgenism.tsx/ImageSlider";
// import { Practice } from "./component/orgenism.tsx/Practice";


import { Container } from "./component/atomic/Container";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { CardList } from "./component/orgenism/CardList.";
// import { Card } from "./component/molecule.tsx/Card";

function App() {

//   const [users, setusers] = useState(0);
//   useEffect(()=>{
//     fetch("http://localhost:4000/users").
//     then((res)=>{
//     return res.json();
//     }).
//     then((res)=>{
//       setusers(res)
//     })
//   },[])
  return (
    <>
      {/* <ul className="flex flex-col gap-2">
        {users && users.map((user) => {
          return (
            <>
              <li className="w-96 flex flex-col justify-center border p-2">
                <img src={user.src} className="h-40"/>
                <p>{user.text}</p> 
                </li>
            </>
          );
        })}
      </ul> */}
       {/* <Login/> */}
      {/* <CreateNew/>  */}
       {/* <Practice/>  */}
      {/* <ImageSlider/> */}
      <Container>
        <Header/> 
        <CardList/>
        <Footer/>
      </Container>
     </>
  );
 }
 export default App;
