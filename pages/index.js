import Head from 'next/head';
import BodyHome from "../components/BodyHome";
import Sidebar from "../components/Sidebar";
import { Provider } from "react-redux";
// import Title from "../components/Title";
import SliderPict from '../components/SliderPict';
import Navbar from "../components/Navbar";
import { Site } from "../config/site";
import store from "../components/store";
import inBrowser from '../lib/checkInBrowser';
import Router from 'next/router';
// import tw, {styled} from 'twin.macro';

// const Button = styled.Button`
// ${tw`bg-red-200 p-4`}
// `

export default function Home(props) {
  console.log(props, "merah");
  if (inBrowser && localStorage.getItem('token')) {
    Router.push('/member-home');
  }
  return (
    <React.Fragment>
      <Provider store={store}>
        <Head><title>Purple Mart</title></Head>
        {/* <Button>
          Wawo
        </Button> */}
        <Navbar />
        <SliderPict />
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
