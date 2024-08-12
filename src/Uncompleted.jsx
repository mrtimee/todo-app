import TodoItem from "./ToDoItem";
import React, { useContext } from "react";
import { TodoContext } from "./Contexts/ToDoContext";
import Empty from "./Empty";

const UncompletedList = () => {
  const { uncompletedTodos } = useContext(TodoContext);
  return (
    <div>
      <ul>
        {!!uncompletedTodos.length ? (
          uncompletedTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        ) : (
          <Empty title="Whoosh 👏" message="You did a great job today." />
        )}
      </ul>
    </div>
  );
};

export default UncompletedList;
