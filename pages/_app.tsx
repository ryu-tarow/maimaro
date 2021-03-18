import "tailwindcss/tailwind.css";
import "styles/globals.css";
import { AppProps } from "next/app";
import Layout from "components/Layout";
import { useEffect } from "react";
import * as gtag from "lib/gtag";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    if (!gtag.existsGaId) {
      return;
    }
    const handleRouteChange = (path) => {
      gtag.pageview(path);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
