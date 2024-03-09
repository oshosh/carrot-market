import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='mx-auto w-full max-w-xl'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
