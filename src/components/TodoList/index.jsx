import React, { useReducer } from "react";
import Lists from "./Lists";
import styles from "./TodoList.module.scss";
import reducer from "./reduser";
import { CONSTANS_TYPE } from "../../constans";

export const initialState = {
  message: "",
  list: [],
};

const TodoList = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handelState = ({ target: { value } }) =>
    dispatch({ type: CONSTANS_TYPE.TYPE_INPUT_TEXT, payload: value });
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
          onClick={() => dispatch({ type: CONSTANS_TYPE.TYPE_ADD_LIST })}
        >
          Add
        </button>
      </section>

      <Lists message={state.list} dispatch={dispatch}></Lists>
    </section>
  );
};

export default TodoList;
