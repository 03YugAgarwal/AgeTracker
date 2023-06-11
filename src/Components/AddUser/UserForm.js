import React, { useState } from "react";

import styles from "./UserForm.module.css";
import Button from "./Button";

import Card from "../Card";
import Modal from "../Modal";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState('')

  const handleAddUser = (e) => {
    e.preventDefault();
    const details = {
      username: username,
      age: age,
    };
    

    if(+age<0){
      setError({
        title: "Error Occured",
        msg: "Age cannot be negative!"
      })
      console.log(error)
      return;
    }
    if(username.trim().length === 0 || age.trim().length === 0){
      setError({
        title: "Error Occured",
        msg: "Fill the above input fields"
      })
      console.log(error)
      return
    }
    props.getDetails(details);
    setUsername("");
    setAge("");
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const errorHandle = () =>{
    setError(null)
  }

  return (
    <div>
      {error && <Modal title={error.title} msg={error.msg} errorHandle={errorHandle} />}
      <Card className={styles.input}>
        <form onSubmit={handleAddUser}>
          <label htmlFor="">Username</label>
          <input onChange={handleUsername} value={username} type="text" />
          <label htmlFor="">Age</label>
          <input onChange={handleAge} value={age} type="number" />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
