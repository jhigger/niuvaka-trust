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
        <meta property="og:title" content="Niuvaka Trust" />
        <meta property="og:image" content="/public/og.png" />
      </Head>
      <main className={`${lato.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
