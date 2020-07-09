import React from 'react';
import Head from 'next/head';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';
import {Provider, useSelector} from 'react-redux';
import store from '../components/store';

function cart() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Head><title>Purple Mart</title></Head>
                <Navbar />
                <Cart />
            </Provider>
        </React.Fragment>
    )
}

export default cart
