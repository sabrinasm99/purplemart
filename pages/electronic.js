import React from "react";
import { Site } from "../config/site";
import Electronic from "../components/Category";
import { Provider } from "react-redux";
import store from "../components/store";
export default function electronic(props) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Electronic result={props.posts} category='Electronic' />
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