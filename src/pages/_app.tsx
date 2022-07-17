import { AppProps } from "next/app";
import Head from "next/head";

import "./styles.css";

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alexander Terekhov</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
