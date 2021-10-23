import { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import '../global.css';

import CartProvider from '@store/Cart';
export function reportWebVitals(metric) {
  console.log(metric);
}
const MyApp = ({ Component, pageProps }: AppProps) => {
  // Providers -- context/providers, theme, data
  // layout
  // props add ons
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
