import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShow } from "../state/state";

const Modal = ({ modalTitle, content, eventButton }) => {
  const show = useSelector((state) => state.todo.value.show);
  const dispatch = useDispatch();
  return (
    <>
      {show && (
        <div
          className={`modal ${show ? "block" : ""}`}
          tabIndex="-1"
          style={{ display: show ? "block" : "none" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => dispatch(setShow(false))}
                ></button>
              </div>
              <div className="modal-body">{content}</div>
              <div className="modal-footer">{show && <>{eventButton}</>}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
