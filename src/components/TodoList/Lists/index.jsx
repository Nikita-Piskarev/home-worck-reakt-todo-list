import React from "react";
import styles from "../TodoList.module.scss";

const Lists = (props) => {
  const messageLists = props.props.map((value, index) => (
    <li className={styles.li} key={index}>
      <p>{value}</p>
      <button className={styles.btnDel}
        onClick={() => props.dispatch({ type: "deleteList", payload: index })}
      >
      </button>
    </li>
  ));

  return <ul className={styles.ul}>{messageLists}</ul>;
};

export default Lists;
