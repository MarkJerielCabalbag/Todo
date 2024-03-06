import React from "react";
import {
  setDescription,
  setList,
  setShow,
  setTitle,
  setStatusDescription,
  setStatusTitle,
  setValidTitle,
  setValidDescription,
} from "../../state/state";
import { useDispatch, useSelector } from "react-redux";
const EventButton = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.todo.value.title);
  const description = useSelector((state) => state.todo.value.description);

  const setStatusAndValid = (
    statusTitle,
    statusDescription,
    validTitle,
    validDescription
  ) => {
    dispatch(setStatusTitle(statusTitle));
    dispatch(setStatusDescription(statusDescription));
    dispatch(setValidTitle(validTitle));
    dispatch(setValidDescription(validDescription));
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          dispatch(setShow(false));
        }}
      >
        Close
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          if (title === "" && description === "") {
            setStatusAndValid(
              "Please fill title",
              "Please fill description",
              "is-invalid",
              "is-invalid"
            );
          } else if (title === "") {
            setStatusAndValid("Please fill title", "", "is-invalid", "");
          } else if (description === "") {
            setStatusAndValid("", "Please fill description", "", "is-invalid");
          } else {
            dispatch(
              setList({
                title,
                description,
              })
            );
            dispatch(setTitle(""));
            dispatch(setDescription(""));
            dispatch(setShow(false));
          }
        }}
      >
        Add Todo
      </button>
    </>
  );
};

export default EventButton;
