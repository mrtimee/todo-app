import { useContext } from "react";
import { TodoContext } from "./Contexts/ToDoContext";

const Pages = () => {
  const { handleAll, handleCompleted, handleUnCompleted } =
    useContext(TodoContext);

  return (
    <div className="pages">
      <h3 className="page" onClick={handleAll}>
        All
      </h3>
      <h3 className="page" onClick={handleCompleted}>
        Completed
      </h3>
      <h3 className="page" onClick={handleUnCompleted}>
        Uncompleted
      </h3>
    </div>
  );
};

export default Pages;
