import Head from "next/head";
import { Provider } from "react-redux";
import { Site } from "../config/site";
import store from "../components/store";
import DefaultHome from '../components/DefaultHome';
import {ToastProvider} from 'react-toast-notifications';



// import Router from "next/router";
// import tw, {styled} from 'twin.macro';

// const Button = styled.Button`
// ${tw`bg-red-200 p-4`}
// `

export default function Home(props) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <ToastProvider placement='bottom-right' transitionDuration={0.01}>
        <Head>
          <title>Purple Mart</title>
        </Head>
        {/* <Button>
          Wawo
        </Button> */}
      <DefaultHome result={props.posts} />
      </ToastProvider>
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
