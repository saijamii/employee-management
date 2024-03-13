import React from "react";

const Header = () => {
  return (
    <header className="py-4 fixed">
      <div className="container">
        <nav
          class="navbar navbar-light bg-white justify-content-between"
          style={{ borderRadius: "15px", width: "83vw",zIndex:"+9"}}
        >
          <div class="row">
            <div class="col-sm-8">
              <i class="bi bi-house-door-fill" style={{ color: "#9ea7b5" }}></i>
              &nbsp;&nbsp; /&nbsp;&nbsp; Dashboard
            </div>
            <div class="col-sm-4 mr-sm-2">
              <div class="input-group">
                <div class="form-outline" data-mdb-input-init>
                  <input
                    type="search"
                    id="form1"
                    class="form-control mr-sm-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
