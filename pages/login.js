import React from "react";
import Head from "next/head";
import Router from 'next/router';
// import Auth from '../settings/auth';
import inBrowser from '../lib/checkInBrowser';

import Login from "../components/Login";

function login() {
  if (inBrowser && localStorage.getItem('token')) {
    Router.push('/member-home');
  }
  return (
    <React.Fragment>
      <Head>
        <title>Purple Mart</title>
      </Head>
      <Login />
    </React.Fragment>
  );
}

export default login;