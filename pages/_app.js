import React from 'react';
import '../styles/tailwind.css';

import '@brainhubeu/react-carousel/lib/style.css';
import 'keen-slider/keen-slider.min.css'
import '../components/Keen.css'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp;
