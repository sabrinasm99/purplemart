import React from "react";
import Head from 'next/head';
import { Site } from "../config/site";
import Grocery from "../components/Category";
import { Provider } from "react-redux";
import store from "../components/store";
export default function grocery(props) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Head><title>Purple Mart</title></Head>
        <Grocery result={props.posts} category='Grocery' />
      </Provider>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${Site.getCategoryProduct}?queryCategory=Grocery`);
  const posts = await res.json();
  return {
    props: { posts },
  };
}
