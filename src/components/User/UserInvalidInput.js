import React from "react";

import Button from "../UI/Button";

const UserInvalidInput = (props) => {
  const closeDialog = () => {
    props.setIsValid(true);
  };

  let errorMessage = "";
  if (parseInt(props.age) <= 0) {
    errorMessage = "Please enter a valid age (>0)";
  } else {
    errorMessage = "Please enter a valid name and age (non-empty values).";
  }

  return (
    <dialog open>
      <div>Invalid Input</div>
      <div>{errorMessage}</div>
      <div>
        <Button type="button" onClick={closeDialog}>
          Okay
        </Button>
      </div>
    </dialog>
  );
};

export default UserInvalidInput;
