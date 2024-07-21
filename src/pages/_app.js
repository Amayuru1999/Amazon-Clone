import { Provider as ReduxProvider } from 'react-redux';
import { Provider as AuthProvider } from 'next-auth/react';
import { store } from '../app/store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </AuthProvider>
  );
};

export default MyApp;
