import React, { useState } from "react";
import UserForm from "./Components/AddUser/UserForm";
import Users from "./Components/ShowUser/Users";

const dummy = [{username: 'Yug', age: 21, id: 1}];

function App() {
  const [arr, setArr] = useState(dummy);


  const getDetails = (details) => {
    setArr((prev) => {
      return [...prev, { username: details.username, age: details.age, id: Math.random() }];
    });
  };


  return (
    <div>
      <UserForm getDetails={getDetails} />
      <Users details={arr}/>
    </div>
  );
}

export default App;
