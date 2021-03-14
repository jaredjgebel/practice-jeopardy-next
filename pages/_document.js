import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta
            property="og:url"
            content="https://practice-jeopardy-next.vercel.app/"
          />
          <meta property="og:title" content="Practice Jeopardy!" />
          <meta
            property="og:description"
            content="Practice Jeopardy questions in a flash-card style format."
          />
          <meta
            name="image"
            property="og:image"
            content="https://i.ibb.co/1s43Wvy/practice-jeopardy-next-preview-screenshot.png"
          />
          <meta property="og:image:width" content="1201" />
          <meta property="og:image:length" content="629" />
          <meta property="og:type" content="website" />
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
