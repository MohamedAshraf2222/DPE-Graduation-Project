import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const pwdref = useRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // try {
    //   const response = axios.post(``, {});

    //   localStorage.setItem("userToken", response.user.accessToken);
    //   SaveUserData();
    //   useNavigate("./login");
    // } catch (error) {
    //   console.log(error);
    // }
  }
  function ShowPassword() {
    // console.log('called');
    // console.log(pwdref.current.getAttribute("type"));
    if (pwdref.current.getAttribute("type") === "password") {
      pwdref.current.setAttribute("type", "text");
    } else if (pwdref.current.getAttribute("type") === "text") {
      pwdref.current.setAttribute("type", "password");
    }
  }
  return (
    <>
      <Navbar />
      <div className="login-content d-flex f-col j-center i-center h-75">
        <h3 className="login-heading">Hello Again!</h3>
        <h5 className="login-subheading">Welcome Back You’ve Been Missed!</h5>
        <h5>To login enter Your email address and password</h5>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Email Address</label>
          <div className="input-wrapper">
            <input type="email" name="email" required />
          </div>
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              ref={pwdref}
              autoComplete={"true"}
              required
            />
            <svg
              onClick={() => ShowPassword()}
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.43682 13.7947C10.1654 14.2886 11.0533 14.5872 11.9981 14.5872C14.5025 14.5872 16.5402 12.5312 16.5402 10.0043C16.5402 9.05098 16.2442 8.15507 15.7547 7.41997L14.5139 8.67194C14.7188 9.06246 14.8327 9.5219 14.8327 10.0043C14.8327 11.5779 13.5577 12.8643 11.9981 12.8643C11.52 12.8643 11.0647 12.7494 10.6776 12.5427L9.43682 13.7947ZM19.4999 3.6411C21.1506 5.15725 22.5507 7.20174 23.598 9.65973C23.6891 9.87796 23.6891 10.1307 23.598 10.3374C21.1619 16.0574 16.8248 19.4802 11.9981 19.4802H11.9868C9.78972 19.4802 7.68375 18.7566 5.82822 17.4357L3.6198 19.664C3.44904 19.8363 3.23276 19.9167 3.01647 19.9167C2.80018 19.9167 2.57251 19.8363 2.41314 19.664C2.12855 19.3768 2.08301 18.9174 2.31068 18.5843L2.34483 18.5384L19.1812 1.55066C19.204 1.52769 19.2267 1.50472 19.2381 1.48175L19.2381 1.48174C19.2609 1.45877 19.2837 1.4358 19.295 1.41283L20.3651 0.333155C20.7066 6.2868e-05 21.2416 6.2868e-05 21.5718 0.333155C21.9133 0.666247 21.9133 1.21757 21.5718 1.55066L19.4999 3.6411ZM7.44777 10.0088C7.44777 10.3074 7.48192 10.6061 7.52745 10.8817L3.31551 15.1315C2.17715 13.7991 1.18678 12.1911 0.401309 10.3419C0.310241 10.1351 0.310241 9.88244 0.401309 9.66421C2.8374 3.94422 7.17456 0.532895 11.9898 0.532895H12.0012C13.6291 0.532895 15.2114 0.923417 16.6685 1.65852L12.8664 5.49482C12.5932 5.44887 12.2972 5.41442 12.0012 5.41442C9.48543 5.41442 7.44777 7.4704 7.44777 10.0088Z"
                fill="#F89300"
              />
            </svg>
          </div>
          <input type="checkbox" name="" id="check" />
          <label htmlFor="check" className="remember-text">
            Remember me
          </label>
          <div className="login-btn-wrapper">
            <button className="login-btn">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
