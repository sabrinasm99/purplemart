import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { Site } from "../config/site";
import { useSelector } from "react-redux";
import Backdrop from "./Backdrop";
import useBackdrop from "../hooks/useBackdrop";
import inBrowser from "../lib/checkInBrowser";
import Axios from "axios";
import { logoutUser } from "./actions/authAction";
import {onSearch} from './actions/searchAction';

function Navbar(props) {
  const test = useSelector((state) => state.test);
  const [backdrop, setBackdrop] = useBackdrop();
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onLogout = (event) => {
    event.preventDefault();
    clearAll();
    logoutUser();
    Router.push("/login");
  };

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onSubmitSearch = (event) => {
    event.preventDefault();
    onSearch(search);
  }
  function clearAll() {
    setBackdrop(false);
    setShowMenu(false);
    setShowSearch(false);
    setShowAccount(false);
  }

  return (
    <React.Fragment>
      <div
        className={` ${
          showSearch ? "z-0 hidden" : "block z-full"
        } flex w-full text-purple-800 bg-white top-0 inset-x-0 z-full shadow-md fixed`}
      >
        <div className="pl-4 py-4 text-xl font-bold cursor-pointer">
          <Link href="/">
            <div>{test.title}</div>
          </Link>
        </div>
        <form className="m-auto relative hidden sm:block w-1/2"
        onSubmit={onSubmitSearch}>
          <input
            type="search"
            className="pl-8 w-full pr-4 py-1  rounded-lg border-gray-200 border-2 focus:outline-none text-gray-600 text-sm sm:text-base "
            placeholder="Search..."
            onChange={onChangeSearch}
          />
          <div className="absolute top-0 left-0 inline-flex items-center p-1 sm:p-2"
          onClick={onSubmitSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x={0} y={0} width={24} height={24} stroke="none" />
              <circle cx={9} cy={9} r={5} />
              <line x1={17} y1={17} x2={13} y2={13} />
            </svg>
          </div>
        </form>
        {router.pathname === "/member-home" ? (
          <React.Fragment>
            <div className="my-auto ml-auto">
              <div
                className="py-1 px-2 rounded-full bg-gray-200 text-sm block sm:hidden cursor-pointer"
                onClick={() => {
                  clearAll();
                  setShowSearch(true);
                }}
              >
                <i className="fas fa-search"></i>
              </div>
            </div>
            <div className="pl-3 sm:pl-0 py-4 flex items-center">
              <div className="py-1 px-2 md:py-0 md:px-0 rounded-full md:rounded-none bg-gray-200 md:bg-white text-sm md:text-base cursor-pointer">
                <i className="fas fa-shopping-cart"></i>
              </div>
            </div>
            <div className="py-4 pr-4 pl-3 md:pl-6 md:flex items-center">
              <div
                className="py-1 px-2 md:py-0 md:px-0 rounded-full md:rounded-none bg-gray-200 md:bg-white text-sm md:text-base cursor-pointer"
                onClick={() => {
                  clearAll();
                  setShowAccount(true);
                  setBackdrop(true);
                }}
              >
                <i className="fas fa-user"></i>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div
              className="flex items-center py-4 ml-auto text-lg sm:hidden"
              onClick={() => {
                clearAll();
                setShowSearch(true);
              }}
            >
              <i className="fas fa-search"></i>
            </div>
            <div className="my-auto hidden sm:block text-lg cursor-pointer">
              <Link href="/login">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </div>
            <div className="p-4 hidden sm:flex items-center ">
              <Link href="/login">
                <div className="bg-purple-800 text-white rounded-md tracking-wide text-sm py-1 px-2 cursor-pointer">
                  LOGIN
                </div>
              </Link>
            </div>
            <div
              className="flex items-center sm:hidden text-lg p-4 cursor-pointer"
              onClick={() => {
                clearAll();
                setShowMenu(true);
              }}
            >
              <i className="fas fa-bars"></i>
            </div>
          </React.Fragment>
        )}
      </div>

      <div
        className={`${
          showMenu ? "block" : "hidden"
        } fixed bg-purple-800 w-full sm:w-auto overflow-y-auto left-0 sm:left-auto p-4 border-purple-500 border-t-4 border-solid sm:h-auto h-full`}
        style={{
          zIndex: 50,
          top: "56.24px",
        }}
      >
        <div className="flex">
          <div className=" border-white border-b-2 text-white text-xl tracking-widest">
            Menu
          </div>
          <div
            onClick={() => {
              clearAll();
            }}
            className="cursor-pointer ml-auto text-white"
          >
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="py-2">
          <Link href="/login">
            <div className="p-2 flex border-b border-white">
              <div className="pr-3 text-white">
                <i className="fas fa-sign-in-alt"></i>
              </div>
              <div className="tracking-wider  text-white">Login</div>
            </div>
          </Link>

          <Link href="/login">
            <div className="p-2 flex border-b border-white">
              <div className="pr-3 text-white">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="tracking-wider  text-white">Cart</div>
            </div>
          </Link>
        </div>
      </div>

      <div
        className={`${
          showAccount ? "block" : "hidden"
        } fixed text-purple-800 bg-white border-t-4 border-purple-500 left-auto right-0 w-40 shadow-md p-3 z-50`}
        style={{ top: "62px" }}
      >
        <div className="text-center border-b-2 border-purple-800 text-xl tracking-widest capitalize">
          {inBrowser && localStorage.getItem("name")}
        </div>
        <div
          className="flex py-2 px-1 items-baseline cursor-pointer"
          onClick={onLogout}
        >
          <div className="pr-2">
            <i className="fas fa-sign-out-alt"></i>
          </div>
          <div className="tracking-wider">Logout</div>
        </div>
      </div>

      <div
        className={`${
          showSearch ? "block" : "hidden"
        } fixed  bg-white left-0 z-full w-full shadow-md`}
        style={{ top: 0, height: "61px" }}
      >
        <div className="flex">
          <div
            className="p-4 text-purple-800 mr-auto"
            onClick={() => {
              clearAll();
            }}
          >
            <i className="fas fa-arrow-left"></i>
          </div>
          <div className="my-auto w-56">
            <input
              className="w-full focus:outline-none pl-3"
              type="search"
              placeholder="Search..."
            />
          </div>
          <div className="ml-auto p-4 text-purple-800">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
      <Backdrop
        clearAll={() => {
          clearAll();
        }}
        backdrop={backdrop}
      />
    </React.Fragment>
  );
}

export default Navbar;
