/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import productsData from '../../public/data/products.json'; // Adjust the path as necessary
import Footer from "@/components/footer";
import Header_global from "@/components/headerGlobal";

export default function Checkout() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    // Fetch cart products details
    const [cartProductDetails, setCartProductDetails] = useState([]);
    useEffect(() => {
        const details = cartItems.map(itemId =>
            productsData.find(product => product.id === itemId)
        );
        setCartProductDetails(details);
    }, [cartItems]);

    // Calculate total
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const newTotal = cartProductDetails.reduce((acc, product) => acc + product.price * product.quantity, 0);
        setTotal(newTotal);
    }, [cartProductDetails]);

    const handleCheckout = () => {
        // Implement checkout functionality here
        alert('Proceed to payment!');
    };

    return (
        <main>
            <Header_global />
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-10">
                <div className="bg-white rounded-3xl p-10 w-full max-w-4xl">
                    <div className="overflow-y-auto h-full">
                        {cartProductDetails.length ? cartProductDetails.map((product, index) => (
                            <div key={index} className="flex items-center justify-between mb-4 p-4 border-b">
                                <div className="flex items-center">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-20 w-20 object-cover rounded-full mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
                                        <p className="text-sm text-gray-600">{product.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-lg font-semibold">${product.price}</span>
                                    <input
                                        type="number"
                                        min="1"
                                        value={product.quantity}
                                        onChange={e => updateQuantity(index, e.target.value)}
                                        className="ml-4 w-16 text-center border-2 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        )) : (
                            <p>Your cart is empty.</p>
                        )}
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
                        <button
                            type="button"
                            className="mt-4 px-6 py-2 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                            onClick={handleCheckout}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );

    // Helper function to update quantity
    function updateQuantity(index, quantity) {
        const updatedDetails = [...cartProductDetails];
        updatedDetails[index] = {
            ...updatedDetails[index],
            quantity: Number(quantity),
        };
        setCartProductDetails(updatedDetails);
    }
};
