// Import CSS and components
import '@/styles/globals.css';
import Header from '@/components/Header';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import { LoadingProvider, useLoading } from '../components/LoadingContext'


const AppContent = ({ Component, pageProps }) => {
  const { isLoading } = useLoading(); // Use the isLoading state

  return (
    <>
      <Header />
      <BackgroundCanvas isLoading={isLoading} />
      <Component {...pageProps} />
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
