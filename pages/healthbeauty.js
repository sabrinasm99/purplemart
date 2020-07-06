import React from "react";
import { Site } from "../config/site";
import HealthBeauty from "../components/Category";
import { Provider } from "react-redux";
import store from "../components/store";
export default function healthbeauty(props) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <HealthBeauty result={props.posts} category='Health & Beauty' />
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