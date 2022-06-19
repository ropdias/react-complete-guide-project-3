import React, { useState } from "react";

import UserInput from "./components/User/UserInput";
import UsersList from "./components/User/UsersList";
import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      // console.log(prevUsers);
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ id: newUser.id, name: newUser.name, age: newUser.age });
      // console.log(updatedUsers);
      return updatedUsers;
    });
  };

  return (
    <div>
      <section id={styles["user-form"]}>
        <UserInput onAddUser={addUserHandler}></UserInput>
      </section>
      <section id={styles["users"]}>
        <UsersList items={users}></UsersList>
      </section>
    </div>
  );
}

export default App;
