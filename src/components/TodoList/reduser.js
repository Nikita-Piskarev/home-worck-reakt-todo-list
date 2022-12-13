import { initialState } from "./index";
export default function reducer(state, action) {
  switch (action.type) {
    case "text": {
      const newState = { ...state, message: action.payload };
      return newState;
    }
    case "isDone": {
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

    case "saveMessage": {
      const newMessage = state.message === "" ? "Note is empty" : state.message;
      const list = { text: newMessage, isDone: false, id: Date.now() };
      const newState = {
        ...initialState,
        list: [...state.list, list],
      };

      return newState;
    }
    case "deleteList": {
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
