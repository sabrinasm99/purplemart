import React from 'react';
import '../styles/tailwind.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp;
