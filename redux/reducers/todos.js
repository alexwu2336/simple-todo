import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../actionTypes";

const initialState = {
  todoList: [],
  nextId: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { task } = action.payload;
      return {
        ...state,
        todoList: [...state.todoList, { id: state.nextId, task }],
        nextId: state.nextId + 1,
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id != id),
      };
    }
    case EDIT_TODO: {
      const { id, task } = action.payload;
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id == id ? { id, task } : todo
        ),
      };
    }
    default:
      return state;
  }
}
