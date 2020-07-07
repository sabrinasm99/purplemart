import React from "react";
import Head from 'next/head';
import { Site } from "../config/site";
import Electronic from "../components/Category";
import { Provider } from "react-redux";
import store from "../components/store";
export default function electronic(props) {
  return (
    <React.Fragment>
      <Provider store={store}>
      <Head><title>Purple Mart</title></Head>
        <Electronic result={props.posts} category='Electronic' />
      </Provider>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${Site.getCategoryProduct}?queryCategory=Electronic`);
  const posts = await res.json();
  return {
    props: { posts },
  };
}