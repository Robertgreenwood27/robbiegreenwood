// Import CSS and components
import '@/styles/globals.css';
import Header from '@/components/Header';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import { LoadingProvider, useLoading } from '../components/LoadingContext'
import Footer from '@/components/Footer'
import { Analytics } from "@vercel/analytics/react"


const AppContent = ({ Component, pageProps }) => {
  const { isLoading } = useLoading(); // Use the isLoading state

  return (
    <>
    <Analytics/>
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
