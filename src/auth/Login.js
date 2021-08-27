import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./auth.css";
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  //const [data, setData] = useState("")
    const history = useHistory()

    const loginHandle = async (e) => {
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
          password: "cityslicka",
        }),
      });
   console.log(res);
      if(res.type === "cors"){
          history.push("/dashboard")
      }
    };
  return (
    <div className="container login-background">
      <div className="login">
        <h1>Login</h1>

        <form className="form"  onSubmit={loginHandle}>
          <p className="field">
            <input type="email"
             name="email"
              placeholder="Email" 
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
              required />
            <i className="fa fa-user"></i>
          </p>

          <p className="field">
            <input
              type="password"
              name="password"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
              placeholder="Password"
              required
            />
            <i className="fa fa-lock"></i>
          </p>

          <p className="submit">
            <input type="submit"  value="Login" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
