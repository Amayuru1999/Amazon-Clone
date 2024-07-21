import { Provider, Provider as ReduxProvider } from 'react-redux';
import { Provider as AuthProvider } from 'next-auth/react';
import { store } from '../app/store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
//Merge the two snippets together to create the following code: