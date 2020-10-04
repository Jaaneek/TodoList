import React, { useEffect } from "react";
const SingleTodo = ({ onDelete, Title }) => {
  useEffect(() => {
    console.dir(Title + " has been added");
    return () => alert(Title + " has been deleted");
  }, []);
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
