import React from "react";
import { Site } from "../config/site";
import MomKids from "../components/Category";
import { Provider } from "react-redux";
import store from "../components/store";
export default function momkids(props) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <MomKids result={props.posts} category='Mom & Kids' />
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