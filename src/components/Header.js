import { useSelector } from "react-redux";

const Header = () => {
  const { numberOfUndoneTasks, numberOfDoneTasks } = useSelector(
    (store) => store.todoList
  );
  return (
    <div className="header">
      <div className="container">
        <h1>My Todo List</h1>
        <div className="counters">
          <p>Tâches totales : {numberOfUndoneTasks + numberOfDoneTasks}</p>
          <p>Tâches faites : {numberOfDoneTasks}</p>
          <p>Tâches restantes : {numberOfUndoneTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
