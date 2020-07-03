import React, { useEffect } from "react";
import Head from "next/head";
// import Router from 'next/router';
// import Auth from '../settings/auth';
import inBrowser from "../lib/checkInBrowser";
import { setAuthToken } from "../utils/AuthService";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "../components/actions/authAction";
import Login from "../components/Login";
import { Provider } from "react-redux";
import store from "../components/store";
import Router from "next/router";
import authReducer from "../components/reducer/authReducer";
import { Site } from "../config/site";
import Axios from "axios";
import { logoutUser } from "../components/actions/authAction";



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
