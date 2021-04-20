import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
function Todo({ text, key, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""} `}>
        {text}
      </li>
      <button onClick={completeHandler} className={"complete-btn"}>
        <CheckIcon />
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <DeleteSweepIcon />
      </button>
    </div>
  );
}

export default Todo;
