import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Cursor from "../components/Cursor/Cursor";

import { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";
export default function App({ Component, pageProps }: AppProps) {
  // const CrispWithNoSSR = dynamic(() => import("../components/crisp"));
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    Router.events.on("routeChangeStart", () => {
      NProgress.start();
      setLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      NProgress.done();
      setLoading(false);
    });

    Router.events.on("routeChangeError", () => {
      NProgress.done();
      setLoading(false);
    });

    return () => {
      Router.events.off("routeChangeStart", () => {
        NProgress.start();
        setLoading(true);
      });

      Router.events.off("routeChangeComplete", () => {
        NProgress.done();
        setLoading(false);
      });

      Router.events.off("routeChangeError", () => {
        NProgress.done();
        setLoading(false);
      });
    };
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <Cursor />
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
