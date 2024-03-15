import React, { useState } from "react";
import "../../App.css";

export default function Login(props) {
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    if (formData.email && formData.password) {
      window.location.pathname = "/app/dashboard";
    }
  };

  const { email, password } = formData;

  return (
    <div className="login_background">
      {form === false ? (
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card" style={{ height: "400px" }}>
                <h3 className="mt-2 text-center">Login</h3>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        value={email}
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        autoComplete="on"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-10 offset-md-5">
                      <button type="submit" className="btn btn-primary">
                        Sign In
                      </button>
                    </div>
                  </form>
                  <div className="mt-5">
                    <h6 className="col-md-8 offset-md-2">
                      {" "}
                      Don't have an account?{" "}
                      <span
                        style={{
                          color: "blue",
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                        onClick={() => setForm(true)}
                      >
                        Sign up
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card" style={{ height: "450px" }}>
                <h3 className="mt-2 text-center">Sign Up</h3>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email1">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-10 offset-md-5">
                      <button type="submit" className="btn btn-primary">
                        Sign UP
                      </button>
                    </div>
                  </form>
                  <div className="mt-5">
                    <h6 className="col-md-8 offset-md-2">
                      {" "}
                      Already have an account?{" "}
                      <span
                        style={{
                          color: "blue",
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                        onClick={() => setForm(false)}
                      >
                        Sign In
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
