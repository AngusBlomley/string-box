import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { SessionProvider, useSession } from 'next-auth/react';
import store from '../store/store';

const stripePromise = loadStripe('pk_test_51PECVeP4ks6btmvuWTAssR46txSFp3QOdSMLIPyU5VZPMp4Gb3INjrojI5j3RomkMWcNUOZe9tGlrbNxByqT71Rx004ju8ZuCc');

function UserInfo() {
    const { data: session } = useSession();
    if (session) {
        console.log("User ID:", session.user.userId); // This logs the userId if available
    }
    return <div>{session ? `Logged in as ${session.user.email}` : "Not logged in"}</div>;
}

function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <Provider store={store}>
                <Elements stripe={stripePromise}>
                    <UserInfo />
                    <Component {...pageProps} />
                </Elements>
            </Provider>
        </SessionProvider>
    );
}

export default MyApp;
