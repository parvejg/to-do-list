import { useState } from "react";
import "./ListPage.css";
export const ListPage = () => {
  const [listInput, setListInput] = useState("");
  return (
    <div className="list-page-main-wrapper">
      <div className="input-main-wrapper">
        <div className="list-input-wrapper">
          <input
            type="text"
            className="list-input"
            placeholder="Title...."
            onChange={(e) => setListInput(e.target.value)}
          />
          <button className="list-add-btn">Add List</button>
        </div>
      </div>
      <div className="list-wrapper">
        <li className="item-list">{listInput}</li>
        <li className="item-list">hedfhdfhdshd</li>
        <li className="item-list">hedfhdfhdshd</li>
      </div>
    </div>
  );
};
