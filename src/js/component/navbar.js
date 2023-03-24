import React from "react";
import { Link } from "react-router-dom";
import Logo from "../component/Logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
      <Link className="navbar_brand" to="/">
        <img src={Logo} width="120" className="align-top mx-3 " alt="" />
      </Link>
      <div className="">
        <div class="dropdown mx-3">
          <button
            className="btn btn-dark px-4 py-2 rounded  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul
            className="dropdown-menu my-4 m-0 px-4 "
            aria-labelledby="dropdownMenuButton1"
          >
            {store.favorites.map((favorite, index) => {
              return (
                <div
                  className="d-flex  justify-content-between"
                  onClick={() =>
                    handleRemoveFromFavorites(favorite.name, favorite.id)
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <li style={{ cursor: "pointer", padding: "5px" }} key={index}>
                    {favorite.name}
                  </li>
                  <span>
                    <img
                      style={{
                        width: "20px",
                      }}
                      src={trashIcon}
                    />
                  </span>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
	);
};
 
/*
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButtonExample() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;

*/