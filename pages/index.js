import Head from "next/head";
import BodyHome from "../components/BodyHome";
import Sidebar from "../components/Sidebar";
import { Provider } from "react-redux";
import Keen from "../components/Keen";
import Navbar from "../components/Navbar";
import { Site } from "../config/site";
import store from "../components/store";
import inBrowser from "../lib/checkInBrowser";
import Router from "next/router";
// import tw, {styled} from 'twin.macro';

// const Button = styled.Button`
// ${tw`bg-red-200 p-4`}
// `

export default function Home(props) {
  console.log(props, "merah");
  if (inBrowser && localStorage.getItem("token")) {
    Router.push("/member-home");
  }
  return (
    <React.Fragment>
      <Provider store={store}>
        <Head>
          <title>Purple Mart</title>
        </Head>
        {/* <Button>
          Wawo
        </Button> */}
        <Navbar />
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
        <BodyHome result={props.posts} />
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
