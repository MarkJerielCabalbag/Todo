<<<<<<< HEAD
import { Toaster, toast } from "alert";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
const App = () => {
  return (
    <div>
      <Todo />
      <Toaster />
      <TodoList />
=======
import React from "react";
import Navigation from "./nav/Navigation";
import Navbar from "./nav/Navbar";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div>
      <Navigation />
>>>>>>> e4d5849 (improve todo)
    </div>
  );
};

export default App;
