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

    
        {/* <Navbar />
        <div className="px-5 pt-5 sm:px-12 md:px-16 lg:px-20 xl:px-24 rounded-lg mt-px62">
          <Keen className="rounded-lg">
            <div className="keen-slider__slide rounded-lg">
              <img src="/promo1.png" />
            </div>
            <div className="keen-slider__slide rounded-lg">
              <img src="/promo3.png" />
            </div>
            <div className="keen-slider__slide rounded-lg">
              <img src="/promo4.png" />
            </div>
          </Keen>
        </div>
        <Sidebar />
        <BodyMember result={props.posts} /> */}
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
