import '../styles/globals.css';
import Head from 'next/head';

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Falfrut</title>
        <meta
          name="description"
          content="Fruits and vegetables at your doorstep"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
