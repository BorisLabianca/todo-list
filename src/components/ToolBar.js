import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  ADD_TASK,
  RESET,
  TOGGLE_SORT_TASKS,
} from "../features/todoList/todoListSlice";

const ToolBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(ADD_TASK(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type in a task to add" ref={inputRef} />
        <button type="submit">Register task</button>
        <button type="button">Undo last event</button>
        <button
          type="button"
          onClick={() => {
            dispatch(RESET());
          }}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(TOGGLE_SORT_TASKS());
          }}
        >
          Sort tasks
        </button>
      </form>
    </div>
  );
};

export default ToolBar;
