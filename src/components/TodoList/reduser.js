import { initialState } from "./index";
import { CONSTANS_TYPE } from "../../constans";

export default function reducer(state, action) {
  switch (action.type) {
    case CONSTANS_TYPE.TYPE_INPUT_TEXT: {
      const newState = { ...state, taskText: action.payload };
      return newState;
    }

    case CONSTANS_TYPE.TYPE_IS_DONE_LIST: {
      const doneList = state.list.map((list) => ({
        ...list,
        isDone: list.id === action.payload ? !list.isDone : list.isDone,
      }));

      const newState = {
        ...initialState,
        list: [...doneList],
      };
      return newState;
    }

    case CONSTANS_TYPE.TYPE_ADD_LIST: {
      const newTask = state.taskText === "" ? "Note is empty" : state.taskText;

      const list = { text: newTask, isDone: false, id: Date.now() };

      const newState = {
        ...initialState,
        list: [...state.list, list],
      };

      return newState;
    }
    case CONSTANS_TYPE.TYPE_DEL_LIST: {
      const newList = state.list.filter((_, index) => index !== action.payload);

      const newState = {
        ...state,
        list: [...newList],
      };
      return newState;
    }

    default:
      return state;
  }
}
