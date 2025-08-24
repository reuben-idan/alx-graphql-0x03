import ErrorBoundary from '../components/ErrorBoundary';
import type { AppProps } from "next/app";
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
