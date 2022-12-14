import React from "react";
import styles from "../TodoList.module.scss";
import { CONSTANS_TYPE } from "../../../constans";

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
          dispatch({ type: CONSTANS_TYPE.TYPE_IS_DONE_LIST, payload: +id })
        }
      />
      <button
        className={styles.btnDel}
        onClick={() =>
          dispatch({ type: CONSTANS_TYPE.TYPE_DEL_LIST, payload: index })
        }
      ></button>
    </li>
  ));

  return <ul className={styles.ul}>{messageLists}</ul>;
};

export default Lists;
