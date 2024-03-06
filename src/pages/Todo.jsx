import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import React from "react";
import { setShow } from "../state/state";
import Modal from "../components/Modal";
import ModalContent from "./todo-components/ModalContent";
import EventButton from "./todo-components/EventButton";
const Todo = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.todo.value.show);
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Button
        type={"primary"}
        label={"Add Todo"}
        onClick={() => {
          dispatch(setShow(true));
        }}
      />
      {show && (
        <Modal
          modalTitle="Add Todo"
          content={<ModalContent />}
          eventButton={<EventButton />}
        />
      )}
    </div>
  );
};

export default Todo;
