// Import CSS and components
import '@/styles/globals.css';
import Header from '@/components/Header';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import { LoadingProvider, useLoading } from '../components/LoadingContext'
import Footer from '@/components/Footer'
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head';


const AppContent = ({ Component, pageProps }) => {
  const { isLoading } = useLoading(); // Use the isLoading state

  return (
    <>
    <Analytics/>
    <Head>
  <meta name="description" content="Robbie Greenwood's web developer portfolio showcasing skills and projects." />
  <link rel="icon" href="/favicon.ico" />
  
  {/* Open Graph meta tags */}
  <meta property="og:title" content="Robbie Greenwood - Web Developer Portfolio" />
  <meta property="og:description" content="Robbie Greenwood's web developer portfolio showcasing skills and projects." />
  <meta property="og:image" content="https://www.robbiegreenwood.dev/Robbie.png" />
  <meta property="og:url" content="https://robbiegreenwood.dev" />
  <meta property="og:type" content="website" />
</Head>
      <Header />
      <BackgroundCanvas isLoading={isLoading} />
      <Component {...pageProps}/>
      <Footer/>
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <LoadingProvider>
        <AppContent Component={Component} pageProps={pageProps} />
    </LoadingProvider>
  );
};

export default App;
