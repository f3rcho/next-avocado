import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* webfont */}
          {/* stylesheet */}
          {/* scripts */}
        </Head>
        <body className='my-body=example'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;