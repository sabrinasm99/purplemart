import React from "react";
import Head from 'next/head';
import { Site } from "../config/site";
import HealthBeauty from "../components/Category";
import { Provider } from "react-redux";
import store from "../components/store";
export default function healthbeauty(props) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Head><title>Purple Mart</title></Head>
        <HealthBeauty result={props.posts} category="Health & Beauty" />
      </Provider>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${Site.getCategoryProduct}?queryCategory=Health`);
  const posts = await res.json();
  return {
    props: { posts },
  };
}
