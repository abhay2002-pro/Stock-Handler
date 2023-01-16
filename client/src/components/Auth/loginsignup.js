import React, { useState, useContext } from "react";
import styles from "./loginsignup.module.css";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/authcontext";

export default function SignUpIn() {
  const [rightPanel, setRightPanel] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    last_name: "",
    first_name: "",
  });
  const navigate = useNavigate();
  //   const { setValue, removeValue } = useLocalStorage();
  const auth = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = loginForm.email;
    const password = loginForm.password;

    if (email.trim().length === 0) {
      alert("Email cannot be empty");
      return;
    }

    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/v1/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
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
        auth.login(resData.token);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const first_name = signupForm.first_name;
    const last_name = signupForm.last_name;
    const email = signupForm.email;
    const password = signupForm.password;

    if (
      first_name.trim().length === 0 ||
      last_name.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      alert("Please fill all the fields");
      return;
    }

    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/v1/register`, {
      method: "POST",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
      }),
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
        auth.login(resData.token);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id={styles["cont"]}>
      <div
        className={`${styles["container"]} ${
          rightPanel ? styles["right-panel-active"] : ""
        }`}
        id={styles["container"]}
      >
        <div
          className={`${styles["form-container"]} ${styles["sign-up-container"]}`}
        >
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={(e) => {
                setSignupForm({
                  ...signupForm,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={(e) => {
                setSignupForm({
                  ...signupForm,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                setSignupForm({
                  ...signupForm,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setSignupForm({
                  ...signupForm,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setSignupForm({
                  ...signupForm,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div
          className={`${styles["form-container"]} ${styles["sign-in-container"]}`}
        >
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
              }}
            />
            {/* <a href="#">Forgot your password?</a> */}
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className={styles["overlay-container"]}>
          <div className={styles["overlay"]}>
            <div
              className={`${styles["overlay-panel"]} ${styles["overlay-left"]}`}
            >
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className={styles["ghost"]}
                id={styles["signIn"]}
                onClick={() => {
                  setRightPanel(false);
                }}
              >
                Sign In
              </button>
            </div>
            <div
              className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
            >
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className={styles["ghost"]}
                id={styles["signUp"]}
                onClick={() => {
                  setRightPanel(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
