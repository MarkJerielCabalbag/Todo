import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const TodoList = () => {
  const list = useSelector((state) => state.todo.value.list);
  return (
    <>
      {list.map((todo) => (
        <Card title={todo.title} content={todo.description} />
      ))}
    </>
  );
};

export default TodoList;
