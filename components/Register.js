import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import Axios from "axios";
import { Site } from "../config/site";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  
  const changeInputName = (event) => {
    setName(event.target.value);
  };
  const changeInputUsername = (event) => {
    setUsername(event.target.value);
  };
  const changeInputPassword = (event) => {
    setPassword(event.target.value);
  };
  const changeInputAddress = (event) => {
    setAddress(event.target.value);
  };
  const submitRegister = (event) => {
    event.preventDefault();
    Axios.post(Site.registerMember, {
      name: name,
      username: username,
      password: password,
      address: address,
    }).then(res => {
      Router.push("/");
    });
  };
  return (
    <React.Fragment>
      <div className="h-screen w-full flex justify-center items-center p-4 my-10 sm:my-0 sm:p-0">
        <div className="w-full sm:w-3/5 lg:w-2/5 m-0 sm:m-auto rounded-lg shadow-lg p-5 sm:p-6 md:p-8 bg-white">
          <h1 className="text-center text-3xl font-extrabold text-purple-800">
            Register
          </h1>
          <form onSubmit={submitRegister}>
            <div className="my-auto flex flex-col">
              <div className="block md:flex p-2 md:p-4">
                <label className="w-full md:w-1/3 block">Name</label>
                <input
                  type="text"
                  className="w-full md:w-2/3 block border border-gray-500 border-solid rounded-lg pl-3 p-1 focus:outline-none"
                  placeholder="Thomas Lion"
                  onChange={changeInputName}
                  value={name}
                />
              </div>
              <div className="block md:flex p-2 md:p-4">
                <label className="w-full md:w-1/3 block">Username</label>
                <input
                  type="text"
                  className="w-full md:w-2/3 block border border-gray-500 border-solid rounded-lg pl-3 p-1 focus:outline-none"
                  placeholder="thomas_14"
                  onChange={changeInputUsername}
                  value={username}
                />
              </div>
              <div className="block md:flex p-2 md:p-4">
                <label className="w-full md:w-1/3 block">Password</label>
                <input
                  type="password"
                  className="w-full md:w-2/3 block border border-gray-500 border-solid rounded-lg pl-3 p-1 focus:outline-none"
                  placeholder="********"
                  onChange={changeInputPassword}
                  value={password}
                />
              </div>
              <div className="block md:flex p-2 md:p-4">
                <label className="w-full md:w-1/3 block">Address</label>
                <textarea
                  className="focus:outline-none w-full md:w-2/3 block border border-gray-500 border-solid rounded-lg h-32 pl-3 p-1"
                  placeholder="Jalan Duri Selatan II"
                  onChange={changeInputAddress}
                  value={address}
                />
              </div>
            </div>
            <button className="bg-purple-800 focus:outline-none hover:bg-purple-600 text-white font-bold rounded-lg w-full p-2 mt-3 tracking-widest"
            onClick={submitRegister}>
              REGISTER NOW
            </button>
          </form>
          <p className="mt-2 font-light text-gray-500">
            Already have an account?{" "}
            <Link href="/login">
              <p className="cursor-pointer underline inline">Login</p>
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
