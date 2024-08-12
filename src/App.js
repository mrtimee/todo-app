import { TodoContext } from "./Contexts/ToDoContext";
import { useContext } from "react";

import TodoInput from "./ToDoInput";
import TodoLists from "./ToDoLists";
import "./App.css";
import Pages from "./Pages";
import CompletedList from "./Completed";
import UncompletedList from "./Uncompleted";

const App = () => {
  const { showAll, showCompleted, showUncompleted } = useContext(TodoContext);

  return (
    <div className="App">
      <TodoInput />
      <Pages />
      <div>
        {showAll && <TodoLists />}
        {showCompleted && <CompletedList />}
        {showUncompleted && <UncompletedList />}
      </div>
    </div>
  );
};

export default App;
