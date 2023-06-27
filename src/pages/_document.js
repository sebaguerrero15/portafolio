import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Portafolio|Sebastián Guerrero A." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        
      </Head>

      <body className="bg-gradient-to-r from-[#030024] via-[#020114] to-[#010011]">
        <Main />
        <NextScript />

       
      </body>
    </Html>
  );
}
