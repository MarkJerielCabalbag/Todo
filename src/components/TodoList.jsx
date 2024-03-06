import React from "react";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import { removeTodo } from "../features/todo";

const TodoList = () => {
  const list = useSelector((state) => state.todo.value.list);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      {list.map((item) => (
        <div class="card container-sm my-4" key={item.id}>
          <div class="card-body">
            <h5 class="card-title">Todo</h5>
            <p class="card-text">{item.todo}</p>
            <button
              class="btn btn-warning"
              onClick={() => {
                console.log(item.list.id);
                handleRemoveTodo(item.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
