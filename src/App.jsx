import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Components1 from "./components/components1/Components1";
import StudentCard from "../src/components/components2/StudentCard"
import Button from "./components/button/Button";
import UserProfile from "./components/button/userprofile/UserProfile";


function App() {
  // 1)  H1 tag-i olan, ‘Hello, React’ yazisini saxlayan component yaradin. Ve hemin component-i Esas component-de cagirin.

  // 2) StudentCard komponenti yaradın. Tələbənin name, age, and grade- ni göstərən sadə tələbə məlumat kartı komponenti yaradın.
  // App component-i 3 dene muxtelif melumatlara malik StudentCard component-ni qebul edir. Datalar props-larla ötürülür.
  // 4) UserProfile component-I yaradin ve user object-I {name: “”, surname: “”} yaradin object-I props kimi göndərin,
  //  eger user null olarsa ‘Loading...’ mesajini gosterin eks halda user melumatlarini gosterin. 
  const st = {
    name: "Eli",
    surname: "Eliyev",
    age: "21",
    grade: "3",
  };
  const user={name:" ",surname:"df"}
  
  function myfunction(){
    alert("Welcome,React!")
   }
  return (
    <>
      <Components1 />
      <StudentCard  name={st.name} surname={st.surname} age={st.age} grade={st.grade}/>
<Button text="Click,me"  color ="red"  bg="blue" propsOnClick ={myfunction}/>
{
  user.name == false || user.surname == false ? <p>Loading..</p> : <UserProfile  name={user.name} surname={user.surname}/>

}
    </>
  );
}

export default App;
