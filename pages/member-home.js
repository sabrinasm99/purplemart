import Head from "next/head";
import { Provider } from "react-redux";
import { Site } from "../config/site";
import store from "../components/store";
import inBrowser from "../lib/checkInBrowser";
import CompMemberHome from '../components/MemberHome';
import Router from "next/router";

export default function memberhome(props) {
  if (inBrowser && !localStorage.tokenLS) {
    Router.push('/login')
  }
  return (
    <React.Fragment>
      <Provider store={store}>
        <Head>
          <title>Purple Mart</title>
        </Head>
        <CompMemberHome result={props.posts} />
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
