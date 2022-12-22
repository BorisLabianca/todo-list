import { useSelector } from "react-redux";

import Todo from "./Todo";

const Todos = () => {
  const { tasks, sortTasks } = useSelector((store) => store.todoList);
  return !sortTasks ? (
    <div>
      {tasks.map((task, index) => {
        return <Todo key={index} task={task} index={index} />;
      })}
    </div>
  ) : (
    <div>
      {tasks.map((task, index) => {
        if (!task.isDone) {
          return <Todo key={index} task={task} index={index} />;
        } else {
          return null;
        }
      })}
      {tasks.map((task, index) => {
        if (task.isDone) {
          return <Todo key={index} task={task} index={index} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Todos;
