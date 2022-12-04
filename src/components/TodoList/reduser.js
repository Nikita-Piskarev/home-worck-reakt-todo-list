import { initialState } from "./index";
export default function reducer(state, action) {
  switch (action.type) {
    case "text": {
      const newState = { ...state, message: action.payload };
      return newState;
    }
    case "saveMessage": {
      const newMessage = state.message === "" ? "Note is empty" : state.message;

      const newState = {
        ...initialState,
        list: [...state.list, newMessage],
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
