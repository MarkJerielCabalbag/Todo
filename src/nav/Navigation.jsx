import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Todo from "../pages/Todo";
import TodoList from "../pages/TodoList";
import TodoDeleted from "../pages/TodoDeleted";
import Navbar from "./Navbar";

const Navigation = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="/todo" element={<Todo />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/tododeleted" element={<TodoDeleted />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router}>
      <Navbar />
    </RouterProvider>
  );
};

export default Navigation;
