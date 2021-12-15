import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { REGISTER_POST } from "../../apiService";

const scripts = `
var loaderElement = document.querySelector('#load_screen');
setTimeout( function() {
    loaderElement.style.display = "none";
}, 3000);`;
function Register2() {
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const navigate = useNavigate(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const payload = { email, password, phone_no: phone };
      const response = await REGISTER_POST(payload);
      console.log(response, "RES");
      if (response?.code === "200") {
        toast(response.msg || "register! success");
        setTimeout(() => {
          navigate("/auth_login");
        }, 3500);
      } else {
        toast(response.msg || "failed to register!");
      }
    } else {
      toast("enter email and password");
    }
  };

  return (
    <>
      {/* <!-- BEGIN GLOBAL MANDATORY STYLES --> */}
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="assets/css/plugins.css" rel="stylesheet" type="text/css" />
      <link
        href="assets/css/authentication/form-2.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* <!-- END GLOBAL MANDATORY STYLES --> */}
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
      <ToastContainer />
      <div className="form">
        <div class="form-container outer">
          <div class="form-form">
            <div class="form-form-wrap">
              <div class="form-container">
                <div class="form-content">
                  <h1 class="">Register</h1>
                  <p class="signup-link register">
                    Already have an account?
                    {/* <a href="auth_login_boxed.html">Log in</a> */}
                    <Link to="/auth_login">Log in</Link>
                  </p>
                  <form class="text-left" onSubmit={handleSubmit}>
                    <div class="form">
                      <div id="email-field" class="field-wrapper input">
                        <label for="email">EMAIL</label>
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
                          class="feather feather-at-sign register"
                        >
                          <circle cx="12" cy="12" r="4"></circle>
                          <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                        </svg>
                        <input
                          id="email"
                          name="email"
                          type="text"
                          value=""
                          class="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div id="username-field" class="field-wrapper input">
                        <label for="username">Phone No</label>
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
                          name="phone_no"
                          type="text"
                          class="form-control"
                          placeholder="1234567890"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      <div id="password-field" class="field-wrapper input mb-2">
                        <div class="d-flex justify-content-between">
                          <label for="password">PASSWORD</label>
                          <a
                            href="auth_pass_recovery_boxed.html"
                            class="forgot-pass-link"
                          >
                            Forgot Password?
                          </a>
                        </div>
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
                          id="toggle-password"
                          class="feather feather-eye"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </div>

                      <div class="field-wrapper terms_condition">
                        <div class="n-chk">
                          <label class="new-control new-checkbox checkbox-primary">
                            <input type="checkbox" class="new-control-input" />
                            <span class="new-control-indicator"></span>
                            <span>
                              I agree to the{" "}
                              <a href="javascript:void(0);">
                                {" "}
                                terms and conditions{" "}
                              </a>
                            </span>
                          </label>
                        </div>
                      </div>

                      <div class="d-sm-flex justify-content-between">
                        <div class="field-wrapper">
                          <button
                            type="submit"
                            class="btn btn-primary"
                            value=""
                          >
                            Get Started!
                          </button>
                        </div>
                      </div>

                      <div class="division">
                        <span>OR</span>
                      </div>

                      <div class="social">
                        <a href="javascript:void(0);" class="btn social-fb">
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
                            class="feather feather-facebook"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                          <span class="brand-name">Facebook</span>
                        </a>
                        <a href="javascript:void(0);" class="btn social-github">
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
                            class="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          <span class="brand-name">Github</span>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- BEGIN GLOBAL MANDATORY SCRIPTS --> */}
      <script src="assets/js/libs/jquery-3.1.1.min.js"></script>
      <script src="bootstrap/js/popper.min.js"></script>
      <script src="bootstrap/js/bootstrap.min.js"></script>

      {/* <!-- END GLOBAL MANDATORY SCRIPTS --> */}
      <script src="assets/js/authentication/form-2.js"></script>
      <script dangerouslySetInnerHTML={{ __html: scripts }}></script>
    </>
  );
}

export default Register2;
