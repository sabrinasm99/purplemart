import Head from 'next/head';
import BodyHome from "../components/BodyHome";
import Axios from "axios";
import Sidebar from "../components/Sidebar";
import { Provider } from "react-redux";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import { Site } from "../config/site";
import store from "../components/store";

export default function Home(props) {
  console.log(props, "merah");
  return (
    <React.Fragment>
      <Provider store={store}>
        <Head><title>Purple Mart</title></Head>
        <Navbar />
        <Title />
        <Sidebar />
        <BodyHome result={props.posts} />
      </Provider>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  // const {data: result} = await Axios.get(Site.getProduct);
  const res = await fetch(Site.getProduct);
  const posts = await res.json();
  return {
    props: { posts },
  };
}
