import "../styles/index.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Renety Gamma</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
