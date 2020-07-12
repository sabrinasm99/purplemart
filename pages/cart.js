import React from 'react';
import Head from 'next/head';
import Cart from '../components/Cart';
import {Provider} from 'react-redux';
import store from '../components/store';
import {ToastProvider} from 'react-toast-notifications';

function cart() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <ToastProvider placement='bottom-center'>
                <Head><title>Purple Mart</title></Head>
                <Cart />
                </ToastProvider>
            </Provider>
        </React.Fragment>
    )
}

export default cart
