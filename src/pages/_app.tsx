import { type AppType } from "next/app";
import { Lato } from "next/font/google";
import Head from "next/head";

import "~/styles/globals.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "300", "400", "700", "900"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://www.niuvaka.org.nz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Niuvaka Trust" />
        <meta
          property="og:description"
          content="Tagata Pasifika: Thriving, Flourishing, Resilient"
        />
        <meta property="og:image" content="/opengraph-image.png" />
      </Head>
      <main className={`${lato.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
