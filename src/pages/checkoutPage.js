import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from "@/components/footer";
import Header_global from "@/components/headerGlobal";
import Cart from '@/components/cart';
import Checkout from '@/components/checkout';

export default function CheckoutPage() {
    const cartItems = useSelector(state => state.cart.items);
    const [view, setView] = useState('checkout'); // ####PUT THIS BACK TO CART AFTER EDITING CHECKOUT CODE#####

    const handleCheckout = () => {
        setView('checkout'); // Change view to checkout when the button is clicked
    };

    const handleBackToCart = () => {
        setView('cart'); // Change view back to cart
    };

    return (
        <main>
            <Header_global />
            {view === 'cart' ? <Cart handleCheckout={handleCheckout} /> : <Checkout handleBackToCart={handleBackToCart} />}
            <Footer />
        </main>
    );
};
