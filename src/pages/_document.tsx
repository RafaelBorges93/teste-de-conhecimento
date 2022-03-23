import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
            
        <link rel="shortcut icon" href="favicon.png" type="image/png"/>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html> 
    );
  }
}