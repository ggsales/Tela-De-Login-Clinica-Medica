import '../public/css/fontAwesome5Pro.css';
import '../public/css/elegantFont.css';
import '../public/css/style.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Login Clínica </title>
      </Head>
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
