import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import Head from "next/head";
import PopupBanner from "../components/PopUp/PopUp";
export default function App({ Component, pageProps }: AppProps) {
  const CrispWithNoSSR = dynamic(() => import("../components/Crisp/Crisp"));
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
      <Head>
        <title>StriveNex - Growing Your Business Made Simple </title>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_KEY}
        />
        <meta
          name="description"
          content="StriveNex is your partner in creating professional and effective websites. Elevate your online presence with our innovative web design solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <PopupBanner />
          <CrispWithNoSSR />
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
