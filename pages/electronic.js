import React from "react";
import Head from 'next/head';
import { Site } from "../config/site";
import Electronic from "../components/Category";
import { Provider } from "react-redux";
import {ToastProvider} from 'react-toast-notifications';
import store from "../components/store";
export default function electronic(props) {
  return (
    <React.Fragment>
      <Provider store={store}>
      <ToastProvider placement='bottom-right' transitionDuration={0.01}>
      <Head><title>Purple Mart</title></Head>
        <Electronic result={props.posts} category='Electronic' />
        </ToastProvider>
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