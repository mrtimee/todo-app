import TodoItem from "./ToDoItem";
import React, { useContext } from "react";
import { TodoContext } from "./Contexts/ToDoContext";
import Empty from "./Empty";

const TodoLists = () => {
  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {!!todos.length ? (
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      ) : (
        <Empty title="No to-dos today? 🙄" message="C'mon, don't be lazy."/>
      )}
    </ul>
  );
};

export default TodoLists;
