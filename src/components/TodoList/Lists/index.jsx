import React from "react";
import styles from "../TodoList.module.scss";

const Lists = (props) => {
  const { message, dispatch } = props;

  const messageLists = message.map((value, index) => (
    <li className={styles.li} key={value.id}>
      <p>{value.text}</p>
      <input
        type="checkbox"
        id={value.id}
        checked={value.isDone}
        onChange={({ target: { id } }) =>
          dispatch({ type: "isDone", payload: +id })
        }
      />
      <button
        className={styles.btnDel}
        onClick={() => dispatch({ type: "deleteList", payload: index })}
      ></button>
    </li>
  ));

  return <ul className={styles.ul}>{messageLists}</ul>;
};

export default Lists;
