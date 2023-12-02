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
    console.log(obj);
    setTodo(obj);
    // setNewTodosText("");
  };
  const removeListHandler = () => {
    if (todo.length === 1) {
    }
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
                className="item-list"
                onClick={(e) => console.log(e.target.value)}
              >
                {newList.text}
              </li>
              <button className="close-btn" onClick={removeListHandler}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
