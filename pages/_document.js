import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="lg:max-w-[1536px] lg:m-auto bg-bodyBackground font-overpass">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
