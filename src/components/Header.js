// Header.js
import React from "react";

const Header = (props) => {
  return (
    <header className="py-4 fixed">
      <div className="container">
        <nav
          className="navbar navbar-light bg-white justify-content-between"
          style={{ borderRadius: "15px", width: "80vw" }}
        >
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-auto">
                {" "}
                <i
                  className="bi bi-house-door-fill"
                  style={{ color: "#9ea7b5" }}
                ></i>
                &nbsp;&nbsp; /&nbsp;&nbsp; {props.menuItem}
              </div>
            </div>
            <div className="row">
              {/* <div className="col">1 of 3</div> */}
              <div className="col-md-auto">
                <div className="form-outline" data-mdb-input-init>
                  <input
                    type="search"
                    id="form1"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
              {/* <div class="col col-lg-2">3 of 3</div> */}
            </div>
          </div>        
        </nav>
      </div>
    </header>
  );
};

export default Header;
