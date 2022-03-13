import React from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'antd/dist/antd.css';

import '../styles/pages.scss';

import MenuContextProvider from 'src/context/SidenavMenu-ctx';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          key="viewport"
        />
      </Head>
      <MenuContextProvider>
        <Component {...pageProps} />
      </MenuContextProvider>
    </>
  );
}

export default MyApp;
