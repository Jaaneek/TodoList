import React, { useState } from "react";
import SingleTodo from "./SingleTodo";
const TodoList = () => {
  const [todos, setTodos] = useState(["Example Todo1", "Example Todo2"]);
  const [text, setText] = useState("");

  const DeleteFromTodos = (TodoIndex) => {
    //Todos with removed item at index
    const newTodos = todos.filter((el, index) => index !== TodoIndex);
    setTodos(newTodos);
  };

  const AddTodo = (event) => {
    if (text === "") return;
    if (event.key === "Enter") setTodos([...todos, text]);
  };
  return (
    <div style={{ margin: "0 30%", border: "1px solid black" }}>
      {todos.map((el, index) => (
        <SingleTodo
          key={index}
          Title={el}
          onDelete={() => DeleteFromTodos(index)}
        ></SingleTodo>
      ))}
      <input
        style={{ width: "100%", boxSizing: "border-box" }}
        type="text"
        placeholder="Enter Todo Task"
        onKeyDown={(event) => AddTodo(event)}
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
      ></input>
    </div>
  );
};

export default TodoList;
