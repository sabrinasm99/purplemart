import React from "react";
import { Site } from "../config/site";
import Grocery from "../components/Category";
import { Provider } from "react-redux";
import store from "../components/store";
export default function grocery(props) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Grocery result={props.posts} category='Grocery' />
      </Provider>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(Site.getProduct);
  const posts = await res.json();
  return {
    props: { posts },
  };
}
