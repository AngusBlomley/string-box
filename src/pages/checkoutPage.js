import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from "@/components/globals/footer";
import Header_global from "@/components/globals/headerGlobal";
import Cart from '@/components/store/cart';
import Checkout from '@/components/store/checkout';

export default function CheckoutPage() {
    const [view, setView] = useState('cart');

    const handleCheckout = () => {
        setView('checkout');
    };

    const handleBackToCart = () => {
        setView('cart');
    };

    return (
        <main className='bg-off-white'>
            <Header_global />
            {view === 'cart' ? <Cart handleCheckout={handleCheckout} /> : <Checkout handleBackToCart={handleBackToCart} />}
            <Footer />
        </main>
    );
};
