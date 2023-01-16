import React from "react";
import "./SignUp.css";
import { useRef } from "react";

const SignUp = () => {

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitHandler = () => {
    const first_name = firstNameRef.current.value;
    const last_name = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (
      first_name.trim().length === 0 ||
      last_name.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      alert("Please fill all the fields");
      return;
    }

    fetch("http://localhost:4001/api/v1/register", {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form id="login-box">
      <div class="left">
        <h1>Sign up</h1>

        <input type="text" name="first_name" placeholder="First Name" ref={firstNameRef} />
        <input type="text" name="last_name" placeholder="Last Name" ref={lastNameRef}/>
        <input type="text" name="email" placeholder="E-mail" ref={emailRef} />
        <input type="password" name="password" placeholder="Password" ref={passwordRef} />
        <a href="/login">Already a member?</a>

        <button className="submit" onClick={submitHandler}> Sign Up</button>
      </div>

      <div class="right">
        <span class="loginwith">Social network</span>

        <button class="social-signin facebook">Facebook</button>
        <button class="social-signin twitter">Twitter</button>
        <button class="social-signin google">Google+</button>
      </div>
      <div class="or">&#x3C;&#x3E;</div>
    </form>
  );
};

export default SignUp;
