/* eslint-disable react/prop-types */
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <div style={styles.container}>
        <form
          onSubmit={() => {
            handleSubmit(event);
          }}
        >
          <input
            type="text"
            placeholder="Add your todo"
            style={styles.formInput}
            onChange={(event) => {
              handleChangeTitle(event);
            }}
          />
          <button style={styles.button}>Add Todo</button>
        </form>
      </div>
    </>
  );
};

const styles = {
  container: {
    marginBottom: "32px",
  },
  formInput: {
    height: "66px",
    width: "40%",
    fontSize: "16px",
    padding: "0 16px",
  },
  button: {
    height: "72px",
    fontSize: "16px",
  },
};

export default TodoForm;
