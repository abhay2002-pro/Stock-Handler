import React from "react";
import "./SignUp.css";
import { useRef } from "react";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const loginHandler = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.trim().length === 0) {
      alert("Email cannot be empty");
      return;
    }

    fetch("http://localhost:4001/api/v1/login", {
      method: "POST",
      body: {
        email,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 400) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="login-box">
      <div class="left">
        <h1>Login</h1>

        <input type="text" name="email" placeholder="E-mail" ref={emailRef} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <a href="/signup">New to this place?</a>

        <button className="submit" onClick={loginHandler}>
          Login
        </button>
      </div>

      <div class="right">
        <span class="loginwith">Social network</span>

        <button class="social-signin facebook">Facebook</button>
        <button class="social-signin twitter">Twitter</button>
        <button class="social-signin google">Google+</button>
      </div>
      <div class="or">&#x3C;&#x3E;</div>
    </div>
  );
};

export default Login;
