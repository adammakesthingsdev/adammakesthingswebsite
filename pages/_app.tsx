import '../style/global.css';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { poppins, inter } from '@/components/fonts';
import Head from 'next/head';

interface AppProps {
  Component: any;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (

    <div className={poppins.variable + " " + inter.variable}>
      <Head>
        <link rel="shortcut icon" href="/Makes.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
library.add(fab, fas, far);