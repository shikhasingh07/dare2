import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faSignInAlt } from "@fortawesome/fontawesome-free-solid";
import "./Navbar.css";
const NavBar = () => {
  return (
    <>
      <nav className="d-flex align-items-center p-2">
        <div className="headerMain d-flex row m-0 align-items-center p-2">
          <div className="d-flex col-2 m-0 ">
            <div>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="d-flex flases ms-3">
              <img
                height="38px"
                width="80px"
                className="imageOver"
                src="https://d8it4huxumps7.cloudfront.net/images/d2c-logo/d2clogo.svg"
                alt="dare2"
              />
            </div>
          </div>

          <div className="col-7 d-flex ">
            <div className="col-1"></div>
            <div className="position-relative col-10">
              <input
                type="text"
                className="form-control "
                placeholder="Search"
              />
              <FontAwesomeIcon icon={faSearch} className="faSearch" />
            </div>
            <div className="col-1 m-0 p-0"></div>
          </div>

          <div className="d-flex col-3 justify-content-between m-0 p-0">
            <div className="d-flex justify-content-between align-items-center products m-0 p-0">
              <FontAwesomeIcon icon={faBars} />
              <p className="m-0 p-0 mx-2">Our Products</p>
            </div>
            <div className="d-flex">
              <button className="btn">Host Jobs</button>
              <p className="m-0 p-0"></p>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faSignInAlt} className="signGate" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
