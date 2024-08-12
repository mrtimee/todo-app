import React, { useContext } from "react";
import { TodoContext } from "./Contexts/ToDoContext";

const TodoItem = ({ todo }) => {
  const {
    handleEdit,
    handleCheck,
    editId,
    setEditId,
    isEditing,
    isEmpty,
    setIsEditing,
    handleDelete,
  } = useContext(TodoContext);
  const { id, title, completed } = todo;

  return (
    <li className="todo">
      <div>
        <input
          type="checkbox"
          className="cursor"
          disabled={isEditing}
          checked={completed}
          onChange={() => handleCheck(id)}
        />
        {editId === id ? (
          <input className="edit-input" type="text" value={title} onChange={handleEdit} />
        ) : (
          <span className={`todo-title ${completed && "checked"}`}>
            {title}
          </span>
        )}
      </div>

      <div>
        {editId === id ? (
          <button
            onClick={() => {
              setEditId(null);
              setIsEditing(false);
            }}
            disabled={isEmpty}
          >
            ✅
          </button>
        ) : (
          <button
            className="cursor"
            onClick={() => {
              setEditId(id);
              setIsEditing(true);
            }}
            // disabled={completed}
          >
            ✏️
          </button>
        )}
        <button className="cursor" onClick={() => handleDelete(id)}>
          🗑️
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
