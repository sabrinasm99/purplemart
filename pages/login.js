import React from "react";
import Head from "next/head";

import Login from "../components/Login";

function login() {
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
