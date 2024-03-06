import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  const show = useSelector((state) => state.todo.value.show);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/todo">Todo</Link>
              </li>
              <li className="nav-item">
                <Link to="/todolist">Todo List</Link>
              </li>
              <li className="nav-item">
                <Link to="/tododeleted">Todo Deleted</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
