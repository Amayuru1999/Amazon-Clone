import { Provider as ReduxProvider } from 'react-redux';
import { SessionProvider } from 'next-auth/react'; // Ensure this is the correct import
import { store } from '../app/store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </SessionProvider>
  );
};

export default MyApp;
