import { useSelector } from "react-redux";

const Header = () => {
  const { numberOfUndoneTasks, numberOfDoneTasks } = useSelector(
    (store) => store.todoList
  );
  return (
    <div>
      <h2>My Todo List</h2>
      <p>Tâches totales : {numberOfUndoneTasks + numberOfDoneTasks}</p>
      <p>Tâches faites : {numberOfDoneTasks}</p>
      <p>Tâches restantes : {numberOfUndoneTasks}</p>
    </div>
  );
};

export default Header;
