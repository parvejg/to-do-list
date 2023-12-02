import { useState } from "react";
import "./ListPage.css";
export const ListPage = () => {
  const [newTodosText, SetNewTodosText] = useState("");
  const [todo, setTodo] = useState([]);
  const newTodosObj = {};
  const addToListHandler = () => {
    if (newTodosText) {
      newTodosObj.text = newTodosText;
      newTodosObj.id = todo?.length + 1;
      newTodosObj.isTodoListComplete = false;
    }
    setTodo([...todo, newTodosObj]);
    SetNewTodosText("");
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
            onChange={(e) => SetNewTodosText(e.target.value)}
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
              <span className="close-btn">X</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
