import { useState } from "react";
import "./ListPage.css";
export const ListPage = () => {
  const [newTodosText, setNewTodosText] = useState("");
  const [todo, setTodo] = useState([]);
  const addToListHandler = () => {
    let newTodosObj = {};
    if (!!newTodosText) {
      newTodosObj.text = newTodosText;
      newTodosObj.id = todo?.length + 1;
    }
    const obj = [...todo, newTodosObj];
    setTodo(obj);
    setNewTodosText("");
  };
  const checkTodosHandler = (e, id) => {
    const findTodo = todo?.find((item) => item.id === id);
    const findIndex = todo?.findIndex((item) => item.id === id);
    let newTodos = [...todo];
    newTodos[findIndex] = { ...findTodo, isCompleted: true };
    setTodo(newTodos);
  };
  return (
    <div className="list-page-main-wrapper">
      <div className="input-main-wrapper">
        <div className="list-input-wrapper">
          <input
            type="text"
            className="list-input"
            placeholder="Title...."
            value={newTodosText}
            onChange={(e) => setNewTodosText(e.target.value)}
          />
          <button className="list-add-btn" onClick={addToListHandler}>
            Add List
          </button>
        </div>
      </div>
      <div className="list-wrapper">
        {todo?.map((newList) => {
          return (
            <div key={newList.id} className="todos-list">
              <li
                value={newList.id}
                className={newList.isCompleted ? "completed-todo" : "item-list"}
                onClick={(e) => checkTodosHandler(e, newList.id)}
              >
                {newList.text}
              </li>
              <button className="close-btn">X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
