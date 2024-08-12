import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showUncompleted, setShowUnompleted] = useState(false);
  const completedTodos = todos.filter((todo) => todo.completed === true);
  const uncompletedTodos = todos.filter((todo) => todo.completed === false);

  useEffect(() => {
    let canceled = false;
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        if (!canceled) {
          setTodos(data.slice(5, 10));
        }
      })
      .catch((err) => {
        console.error(err);
      });

    return () => (canceled = true);
  }, []);

  const handleCheck = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };

  const handleEdit = (e) => {
    if (e.target.value === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
    const newTodos = todos.map((todo) =>
      todo.id === editId
        ? { ...todo, title: e.target.value, completed: false }
        : todo
    );
    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    const newTodos = {
      id: todos.length + 1,
      title: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodos]);
    setInputValue("");
  };

  const handleAll = () => {
    setShowAll(true);
    setShowCompleted(false);
    setShowUnompleted(false);
  };

  const handleCompleted = () => {
    setShowAll(false);
    setShowCompleted(true);
    setShowUnompleted(false);
  };

  const handleUnCompleted = () => {
    setShowAll(false);
    setShowCompleted(false);
    setShowUnompleted(true);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        showAll,
        showCompleted,
        showUncompleted,
        completedTodos,
        uncompletedTodos,
        inputValue,
        setInputValue,
        editId,
        setEditId,
        isEditing,
        isEmpty,
        setIsEditing,
        handleAddTodo,
        handleDelete,
        handleCheck,
        handleEdit,
        handleCompleted,
        handleUnCompleted,
        handleAll,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
