import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../actionTypes";
import todos from "./todos";

describe("todos reducer", () => {
  it("should be able to initiate state with empty list", () => {
    const initialState = todos(undefined, {});
    expect(Array.isArray(initialState?.todoList)).toBe(true);
    expect(initialState?.todoList?.length).toBe(0);
  });
  it("should be able to add todo item", () => {
    const state = todos(undefined, {
      type: ADD_TODO,
      payload: { id: 1, task: "test" },
    });
    expect(state?.todoList?.length).toBe(1);
  });
  it("should be able to delete todo item", () => {
    const state = todos(
      { todoList: [{ id: 2, task: "test" }] },
      {
        type: DELETE_TODO,
        payload: { id: 2 },
      }
    );
    expect(state?.todoList?.length).toBe(0);
  });
  it("should be able to edit todo item", () => {
    const state = todos(
      {
        todoList: [
          { id: 1, task: "test1" },
          { id: 2, task: "test2" },
        ],
      },
      {
        type: EDIT_TODO,
        payload: { id: 2, task: "t2" },
      }
    );
    expect(state?.todoList?.find((todo) => todo.id === 2)?.task).toBe("t2");
  });
});
