import React from "react";
const SingleTodo = ({ onDelete, Title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <h5>{Title}</h5>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
export default SingleTodo;
