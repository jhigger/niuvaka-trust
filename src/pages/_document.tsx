import type { DocumentContext } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx);

    return initalProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="author" content="github.com/jhigger" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="canonical" href="https://www.niuvaka.org.nz/" />

          <meta property="og:logo" content="/logo.webp" />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:title" content="Niuvaka Trust" />
          <meta
            property="og:description"
            content="Tagata Pasifika: Thriving, Flourishing, Resilient"
          />
          <meta property="og:image" content="/opengraph-image.png" />
          <meta property="og:url" content="https://www.niuvaka.org.nz/" />
          <meta property="og:site_name" content="Niuvaka Trust" />
          <meta property="og:type" content="website" />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Niuvaka Trust" />
          <meta
            name="twitter:description"
            content="Tagata Pasifika: Thriving, Flourishing, Resilient"
          />
          <meta name="twitter:image" content="/opengraph-image.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
