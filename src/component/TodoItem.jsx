import React, { useState } from "react";

function TodoItem(props) {
  const [isDone, setDone] = useState(false);
  function handleClick() {
    setDone(!isDone);
  }

  return (
    <div>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        <input type="checkbox" onClick={handleClick} />
        {props.text}
        <button onClick={()=>(props.onCheck(props.id))}>
          x
        </button>
      </li>
    </div>
  );
}

export default TodoItem;
