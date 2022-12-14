import { Toaster } from "react-hot-toast";
import Layout from "../Components/Layout";
import { StateContext } from "../context/stateContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
