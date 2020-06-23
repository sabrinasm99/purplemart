import React, { useState, useEffect } from "react";
// import { Link, withRouter, Redirect } from "react-router-dom"
import Link from "next/link";
import Router, { withRouter } from "next/router";
import Axios from "axios";
import Auth from "../settings/auth";
import { Site } from "../config/site";
import inBrowser from '../lib/checkInBrowser';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     Auth.login();
  //     console.log(Auth.checkStatus(), "cek STATUS");
  //     setAuth(Auth.checkStatus());
  //   }
  // }, []);

  const changeInputPassword = (event) => {
    setPassword(event.target.value);
  };

  const changeInputUsername = (event) => {
    setUsername(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    Axios.post(Site.loginMember, { username: username, password: password })
      .then((res) => {
        console.log(res, "ini res");
        if (inBrowser) {
          localStorage.setItem("token", res.data.token);
        }
        Router.push("/register");
      })
      .catch((err) =>
        setTimeout(() => {
          setMessage(err.response.data.msg);
        }, 500)
      );
  };

  // if (auth) {
  //   Router.push('/register');
  // }

  return (
    <React.Fragment>
      <div className="h-screen flex justify-center items-center">
        {console.log(Auth.checkStatus(), "cek status")}
        <div
          className="flex rounded-lg mx-8 sm:mx-40 md:mx-0 shadow-lg bg-white"
          style={{ height: "450px", width: "700px" }}
        >
          <div className=" m-auto" style={{ height: "390px", width: "250px" }}>
            <div className="p-1 h-full w-full flex flex-col">
              <h1 className="mb-5 text-3xl text-center text-purple-800 font-extrabold">
                Login
              </h1>
              <form
                className="form-group mb-8"
                onSubmit={onSubmit}
              >
                <input
                  value={username}
                  onChange={changeInputUsername}
                  type="text"
                  placeholder="Username"
                  className="rounded-lg p-1 w-full mb-4 pl-3 focus:outline-none"
                  style={{ backgroundColor: "#edf2f7" }}
                />

                <input
                  type="password"
                  value={password}
                  name="password"
                  onChange={changeInputPassword}
                  placeholder="Password"
                  className="rounded-lg p-1 w-full pl-3 mb-8 focus:outline-none"
                  style={{ backgroundColor: "#edf2f7" }}
                />
                <button
                  className="focus:outline-none bg-purple-800 hover:bg-purple-600 text-white font-bold block p-2 rounded-lg w-full tracking-widest"
                  type="submit"
                  onClick={onSubmit}
                >
                  LOGIN
                </button>
                <p className="font-light text-gray-500 mt-3">Not a member?</p>
                <Link href="/register">
                  <p className="underline font-light text-gray-500 inline cursor-pointer">
                    Register now
                  </p>
                </Link>
              </form>

              <div className="text-red-600 font-medium text-center">
                {message}
              </div>
              <div className="mt-auto mx-auto">
                <Link href="/">
                  <p className="font-semibold text-gray-500 flex hover:font-bold cursor-pointer">
                    Back to home
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-1/2">
            <img
              src="/purplemart.jpg"
              className="rounded-r-lg h-full object-cover"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Login);
