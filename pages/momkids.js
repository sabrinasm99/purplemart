import React from "react";
import Head from 'next/head';
import { Site } from "../config/site";
import MomKids from "../components/Category";
import { Provider } from "react-redux";
import store from "../components/store";
export default function momkids(props) {
  return (
    <React.Fragment>
      <Provider store={store}>
      <Head><title>Purple Mart</title></Head>
        <MomKids result={props.posts} category='Mom & Kids' />
      </Provider>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${Site.getCategoryProduct}?queryCategory=Mom`);
  const posts = await res.json();
  return {
    props: { posts },
  };
}