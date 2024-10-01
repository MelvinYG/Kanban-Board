import { useState } from "react";
import "./displaySelector.css";

const DisplaySelector = ({ grouping, sortOption, onGroupingChange, onSortChange }) => {
  const [displayOpen, setdisplayOpen] = useState(false);
  return (
    <>
      <div
        className="display_selector"
        onClick={() => {
          setdisplayOpen((e) => !e);
          console.log(displayOpen);
        }}
      >
        <img src="/Display.svg" alt="display_icon" />
        <span>Display</span>
        <img src="/down.svg" alt="down_icon" />
      </div>
      <div className="display_box" style={{ visibility: displayOpen ? 'visible' : 'hidden'}}>
        <div className="display_item">
            <label htmlFor="grouping">Grouping</label>
            <select id="grouping" value={grouping}
                onChange={(event) => {onGroupingChange(event.target.value)}}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
            </select>
        </div>
        <div className="display_item">
            <label htmlFor="sort">Ordering</label>
            <select name="sort" value={sortOption}
                onChange={(event) => {onSortChange(event.target.value)}}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
            </select>
        </div>
      </div>
    </>
  );
};

export default DisplaySelector;
