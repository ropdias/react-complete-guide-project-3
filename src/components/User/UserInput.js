import React, { useState } from "react";

import styles from "./UserInput.module.css";
import Button from "../UI/Button";
import UserInvalidInput from "./UserInvalidInput";

const UserInput = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0) {
      console.log("INVALID !");
      setIsValid(false);
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      name: enteredUserName,
      age: parseInt(enteredUserAge),
    };
    props.onAddUser(newUser);
  };

  const nameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  return (
    <div>
      {!isValid && (
        <UserInvalidInput setIsValid={setIsValid} name={enteredUserName} age={enteredUserAge}></UserInvalidInput>
      )}
      <form onSubmit={formSubmitHandler}>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input type="text" onChange={nameChangeHandler}></input>
          <label>Age (Years)</label>
          <input type="text" onChange={ageChangeHandler}></input>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default UserInput;
