import React, { useState, useContext } from "react";
import { LOGIN_POST } from "../../apiService";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate(null);
  const doLogin = (user) => {
    setAuth(user);
    console.log(JSON.stringify(user));
    localStorage.setItem("auth", JSON.stringify(user));
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const response = await LOGIN_POST({ email, password });
      console.log(response, "RES");
      if (response?.code === "200") {
        alert(response.msg || "login! success");
        doLogin(response.data);
      } else {
        alert(response.msg || "failed to login!");
      }
    } else {
      alert("enter email and password");
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/forms/theme-checkbox-radio.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/forms/switches.css"
      />

      <div className="form" style={{ margin: "90px" }}>
        {/* <!-- BEGIN LOADER --> */}
        {/* <div id="load_screen">
          
          <div class="loader">
            
            <div class="loader-content">
              <div class="spinner-grow align-self-center"></div>
            </div>
          </div>
        </div> */}
        {/* <!--  END LOADER --> */}

        <div
          class="form-container"
          style={{ maxWidth: "500px", margin: " 0 auto" }}
        >
          <div class="form-form">
            <div class="form-form-wrap">
              <div class="form-container">
                <div class="form-content">
                  <h1 class="">
                    Log In to
                    <a href="index.html">
                      <span class="brand-name">CORK</span>
                    </a>
                  </h1>
                  <p class="signup-link">
                    New Here? <a href="auth_register.html">Create an account</a>
                  </p>
                  <form class="text-left" onSubmit={handleSubmit}>
                    <div class="form">
                      <div id="username-field" class="field-wrapper input">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          class="form-control"
                          // placeholder="Username"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div id="password-field" class="field-wrapper input mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-lock"
                        >
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="11"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          class="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div class="d-sm-flex justify-content-between">
                        <div class="field-wrapper toggle-pass">
                          <p class="d-inline-block">Show Password</p>
                          <label class="switch s-primary">
                            <input
                              type="checkbox"
                              id="toggle-password"
                              class="d-none"
                            />
                            <span class="slider round"></span>
                          </label>
                        </div>
                        <div class="field-wrapper">
                          <button
                            type="submit"
                            class="btn btn-primary"
                            value=""
                          >
                            Log In
                          </button>
                        </div>
                      </div>

                      <div class="field-wrapper text-center keep-logged-in">
                        <div class="n-chk new-checkbox checkbox-outline-primary">
                          <label class="new-control new-checkbox checkbox-outline-primary">
                            <input type="checkbox" class="new-control-input" />
                            <span class="new-control-indicator"></span>Keep me
                            logged in
                          </label>
                        </div>
                      </div>

                      <div class="field-wrapper">
                        <a
                          href="auth_pass_recovery.html"
                          class="forgot-pass-link"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                  </form>
                  <p class="terms-conditions">
                    © 2020 All Rights Reserved. <a href="index.html">CORK</a> is
                    a product of Designreset.
                    <a href="javascript:void(0);">Cookie Preferences</a>,
                    <a href="javascript:void(0);">Privacy</a>, and
                    <a href="javascript:void(0);">Terms</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="form-image">
            <div class="l-image"></div>
          </div>
        </div>

        <script src="assets/js/authentication/form-1.js"></script>
        <script src="assets/custom/auth-login.js"></script>
        <script src="src/scripts/auth-login.js"></script>

        {/* <!-- BEGIN GLOBAL MANDATORY SCRIPTS --> */}
        <script src="assets/js/libs/jquery-3.1.1.min.js"></script>
        <script src="bootstrap/js/popper.min.js"></script>
        <script src="bootstrap/js/bootstrap.min.js"></script>

        {/* <!-- END GLOBAL MANDATORY SCRIPTS --> */}
        <script src="assets/js/authentication/form-1.js"></script>
      </div>
    </>
  );
}

export default Login;
