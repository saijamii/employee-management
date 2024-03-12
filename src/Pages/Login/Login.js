import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState(false);
  return (
    <div class="login_background">
      {form === false ? (
        <div class="container" style={{ marginTop: "20px" }}>
          <div class="row justify-content-center">
            <div class="col-md-4">
              <div class="card" style={{ height: "400px" }}>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  LOGIN
                </span>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder=" "
                        style={{ width: "100%" }}
                      />
                      <label class="floating-label">Email</label>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder=" "
                        style={{ width: "100%" }}
                      />
                      <label class="floating-label">Password</label>
                    </div>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" />
                      <label>Remember me</label>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style={{ width: "100%", marginTop: "30px" }}
                    >
                      Submit
                    </button>
                  </form>
                  <div style={{ marginTop: "30px" }}>
                    <span>
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
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="container" style={{ marginTop: "20px" }}>
          <div class="row justify-content-center">
            <div class="col-md-4">
              <div class="card" style={{ height: "450px" }}>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  LOGIN
                </span>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder=" "
                        style={{
                          width: "100%",
                          borderTop: "0px",
                          borderLeft: "0px",
                          borderRight: "0px",
                        }}
                      />
                      <label class="floating-label">Name</label>
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder=" "
                        style={{
                          width: "100%",
                          borderTop: "0px",
                          borderLeft: "0px",
                          borderRight: "0px",
                        }}
                      />
                      <label class="floating-label">Email</label>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder=" "
                        style={{
                          width: "100%",
                          borderTop: "0px",
                          borderLeft: "0px",
                          borderRight: "0px",
                        }}
                      />
                      <label class="floating-label">Password</label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label class="form-check-label" for="defaultCheck1">
                        I agree the{" "}
                        <span style={{ color: "blue", fontWeight: "bold" }}>
                          Terms and Conditions
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary"
                      style={{
                        width: "100%",
                        marginTop: "30px",
                        fontWeight: "bold",
                      }}
                    >
                      SIGN IN
                    </button>
                  </form>
                  <div style={{ marginTop: "30px" }}>
                    <span>
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
                    </span>
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
