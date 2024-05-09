import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from "@/components/footer";
import Header_global from "@/components/headerGlobal";
import Cart from '@/components/cart';
import Checkout from '@/components/checkout';

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
