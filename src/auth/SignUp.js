
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./auth.css";
const SignUp = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  // const [data, setData] = useState("")
    const history = useHistory()

  const signUpHandle = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://reqres.in/api/register`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Access-Control-Origin": "*",
      },
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "pistoll",
      }),
    });
    // setData(res.type)
    if(res.type === "cors"){
        history.push("/dashboard")
    }
  };
  return (
    <div className="container login-background">
      <div className="login">
        <h1>Register</h1>

        <form className="form" onSubmit={signUpHandle}>
          <p className="field">
            <input
              type="email"
              name="email"
              placeholder="eve.holt@reqres.in"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
            <i className="fas fa-envelope"></i>
          </p>
          <p className="field">
            <input
              type="password"
              name="password"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
              placeholder="pistol"
              required
            />
            <i className="fa fa-lock"></i>
          </p>

          <p className="submit">
            <input type="submit" name="sent" value="Sign Up" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
