import { useDispatch } from "react-redux";
import { REMOVE_TASK, TOGGLE_TASK } from "../features/todoList/todoListSlice";

import { FaTrash } from "react-icons/fa";

const Todo = ({ task, index }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(REMOVE_TASK(task));
  };
  const handleCheckBox = () => {
    dispatch(TOGGLE_TASK({ ...task, index: index }));
  };

  return (
    <div style={{ display: "flex", gap: "10px", fontSize: "24px" }}>
      <input
        type="checkbox"
        checked={task.isDone}
        style={{ height: "20px", width: "20px" }}
        onChange={handleCheckBox}
      />
      <p style={{ textDecoration: task.isDone && "line-through" }}>
        {task.name}
      </p>
      <FaTrash onClick={handleOnClick} className="trash" />
    </div>
  );
};

export default Todo;
