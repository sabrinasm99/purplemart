import React from "react";
import Register from "../components/Register";
import Head from 'next/head';

function register() {
  return (
    <React.Fragment>
      <Head><title>Purple Mart</title></Head>   
      <Register />
    </React.Fragment>
  );
}

export default register;
