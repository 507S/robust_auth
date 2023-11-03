/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../styles/LoginDesign.css";
import { NavLink } from "react-router-dom";

export default function RegisterLayout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@dreamonline\.co\.jp$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please provide your organization email");
      return;
    } else {
      setEmailError("");
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{6,15}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must contain at least 6 characters, including at least one uppercase letter and one numeric digit, and must not exceed 15 characters"
      );
      return;
    } else {
      setPasswordError("");
    }

    // if (emailError === "" && passwordError === "") {
    //   var encryptedPassword = CryptoJS.AES.encrypt(
    //     JSON.stringify(password),
    //     my_secret_key
    //   ).toString();

    //   // updateRememberedCredentials(email, password);
    //   updateRememberedCredentials(email, encryptedPassword);

    //   axios
    //     .post(`${base_url}/api/v1/client/auth/login`, {
    //       email,
    //       password: encryptedPassword,
    //     })
    //     .then((response) => {
    //       const { token, data, code, message } = response.data;
    //       const clientInfo = {
    //         auth: true,
    //       };

    //       sessionStorage.setItem("clientInfo", JSON.stringify(clientInfo));

    //       // Store the token and data in session storage
    //       sessionStorage.setItem("accessToken", token);
    //       sessionStorage.setItem("userData", JSON.stringify(data.user_id));

    //       // Redirect to the home page or any other protected route
    //       const passwordRecovered = sessionStorage.getItem("passwordRecovered");

    //       // If passwordRecovered is "yes", navigate to "/client-password", else navigate to "/home"
    //       if (passwordRecovered === "yes") {
    //         navigate("/reset-password");
    //         // Clear the value of passwordRecovered from sessionStorage since it's not needed anymore
    //         sessionStorage.removeItem("passwordRecovered");
    //       } else {
    //         navigate("/home");
    //       }
    //     })
    //     .catch((error) => {
    //       if (error.response.status === 401) {
    //         setModalVisible(true);
    //         setModalMessage("User Doesn't Exist");
    //       } else if (error.response.status === 400) {
    //         setModalVisible(true);
    //         setModalMessage("Wrong Email and Password Combination");
    //       } else if (error.response.status === 403) {
    //         setModalVisible(true);
    //         setModalMessage("Account Verification ");
    //       } else {
    //         console.error("Login failed:", error.response.data.error);
    //       }
    //     });
    // }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-7 d-none d-md-flex bg-image"></div>

        <div className="col-md-5 bg-light">
          <div className="login d-flex align-items-center py-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-4">Register</h3>
                  <p className="text-muted mb-4">
                    {/* Create a login split page using Bootstrap 4. */}
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <input
                        id="inputEmail"
                        type="email"
                        placeholder="Email address"
                        required=""
                        autoFocus=""
                        className="form-control rounded-pill border-1 shadow-sm px-4 py-2"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {emailError && (
                        <p className="text-danger m-1">{emailError}</p>
                      )}
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        required=""
                        className="form-control rounded-pill border-1 shadow-sm px-4 py-2"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {passwordError && (
                        <p
                          className="text-danger m-1"
                          style={{ fontSize: "12px" }}
                        >
                          {passwordError}
                        </p>
                      )}
                    </div>
                    {/* <div className="custom-control custom-checkbox mb-3">
                      <input
                        id="customCheck1"
                        type="checkbox"
                        checked
                        className="custom-control-input"
                      />
                      <label
                        htmlFor="customCheck1"
                        className="custom-control-label"
                      >
                        &nbsp;Remember password
                      </label>
                    </div> */}
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm w-100"
                      >
                        Register &nbsp;
                        <i className="fa-solid fa-lock"></i>
                      </button>
                    </div>
                    <div
                      className="text-center d-flex justify-content-between mt-3"
                      style={{ textAlign: "center" }}
                    >
                      <p>
                        Already have an account?
                        <NavLink to="/" className="font-italic text-muted">
                          <u>&nbsp;Login</u>
                        </NavLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
