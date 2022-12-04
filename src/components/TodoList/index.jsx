import React, { useReducer } from "react";
import Lists from "./Lists";
import styles from "./TodoList.module.scss";
import reducer from "./reduser";

export const initialState = {
  message: "",
  list: [],
};

const TodoList = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handelState = ({ target: { value } }) =>
    dispatch({ type: "text", payload: value });

  return (
    <section className={styles.section}>
      <section className={styles.wraperInput}>
        <input
          className={styles.input}
          value={state.message}
          onChange={handelState}
        />
        <button
          className={styles.btnAdd}
          onClick={() => dispatch({ type: "saveMessage" })}
        >
          Add
        </button>
      </section>

      <Lists props={state.list} dispatch={dispatch}></Lists>
    </section>
  );
};

export default TodoList;
