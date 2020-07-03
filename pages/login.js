import React from "react";
import Head from "next/head";
import inBrowser from "../lib/checkInBrowser";
import Login from "../components/Login";
import { Provider } from "react-redux";
import store from "../components/store";
import Router from "next/router";

function login() {
if (inBrowser && localStorage.tokenLS) {
  Router.push('/member-home');
}
  return (
    <React.Fragment>
      <Provider store={store}>
        <Head>
          <title>Purple Mart</title>
        </Head>
        <Login />
      </Provider>
    </React.Fragment>
  );
}

export default login;
