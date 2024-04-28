/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import productsData from '../../public/data/products.json';
import Footer from "@/components/footer";
import Header_global from "@/components/headerGlobal";
import Cart from '@/components/cart';

export default function Checkout() {
    const cartItems = useSelector(state => state.cart.items);
    return (
        <main>
            <Header_global />
            <Cart />
            <Footer />
        </main>
    );
};
