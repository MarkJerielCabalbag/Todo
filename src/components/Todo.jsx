import { Toaster, toast } from "alert";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../features/todo";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const newTodo = {
    todo,
    id: shortid.generate(),
  };
  const dispatch = useDispatch();
  return (
    <form
      class="container-sm my-5"
      onSubmit={(e) => {
        e.preventDefault();
        setTodo("");
        dispatch(
          addTodo({
            todo: todo,
            list: newTodo,
          })
        );
      }}
    >
      <Toaster />
      <div>
        <label class="form-label">Todo</label>
        <input
          type="text"
          class="form-control mb-3"
          placeholder=""
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        onClick={() => {
          toast("Todo added successfully");
        }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default Todo;
