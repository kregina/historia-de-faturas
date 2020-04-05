import './_app.scss';

import { AppProps } from 'next/app';
import React from 'react';

import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
