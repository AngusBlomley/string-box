import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { SessionProvider } from 'next-auth/react'; // Import SessionProvider
import store from '../store/store';

const stripePromise = loadStripe('pk_test_51PECVeP4ks6btmvuWTAssR46txSFp3QOdSMLIPyU5VZPMp4Gb3INjrojI5j3RomkMWcNUOZe9tGlrbNxByqT71Rx004ju8ZuCc');

function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <Provider store={store}>
                <Elements stripe={stripePromise}>
                    <Component {...pageProps} />
                </Elements>
            </Provider>
        </SessionProvider>
    );
}

export default MyApp;
