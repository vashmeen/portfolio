import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=sora:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-gray1 text-gray12">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
