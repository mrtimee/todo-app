import TodoItem from "./ToDoItem";
import { useContext } from "react";
import { TodoContext } from "./Contexts/ToDoContext";
import Empty from "./Empty";

const CompletedList = () => {
  const { completedTodos } = useContext(TodoContext);
  return (
    <div>
      <ul>
        {!!completedTodos.length ? (
          completedTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        ) : (
          <Empty title="Lazy kid 😒" message="When will you get to work?" />
        )}
      </ul>
    </div>
  );
};

export default CompletedList;
