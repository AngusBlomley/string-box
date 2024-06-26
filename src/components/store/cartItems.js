import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import productsData from '../../../public/data/products.json';
import { removeFromCart, updateTotal } from '../../store/actions/cartActions';
import Image from 'next/image';

export default function CartItems({ handleCheckout }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [cartProductDetails, setCartProductDetails] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [taxes, setTaxes] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    useEffect(() => {
        const validItems = cartItems.filter(item => item && typeof item === 'object' && 'id' in item);
        const details = cartItems.map(item => {
            const product = item.isCustom ? null : productsData.find(p => p.id === item.id);
            console.log("Product found:", product);
            return product ? { ...product, quantity: item.quantity } : { ...item, quantity: item.quantity || 1 };
        });
        console.log("Mapped product details:", details);
        setCartProductDetails(details.filter(product => product && product.id));
    }, [cartItems]);


    useEffect(() => {
        const newSubtotal = cartProductDetails.reduce((acc, product) => acc + product.price * product.quantity, 0);
        setSubtotal(newSubtotal);

        // Calculate taxes (assuming a fixed tax rate of 10%)
        const newTaxes = newSubtotal * 0.1;
        setTaxes(newTaxes);

        // Calculate shipping (assuming a flat rate of £5)
        const newShipping = 5; // Flat rate for shipping
        setShipping(newShipping);

        // Calculate total including taxes and shipping
        const newTotal = newSubtotal + newTaxes + newShipping;
        setTotal(newTotal);

        // Convert total to pence and dispatch to Redux store
        dispatch(updateTotal(Math.round(newTotal * 100))); // Ensure total is in pence
    }, [cartProductDetails, dispatch]); // Add dispatch to dependency array

    const updateQuantity = (index, quantity) => {
        const numericQuantity = Number(quantity) || 1;
        const updatedDetails = [...cartProductDetails];
        updatedDetails[index] = {
            ...updatedDetails[index],
            quantity: numericQuantity,
        };
        setCartProductDetails(updatedDetails);
    }


    return (
        <main>
            <div className="overflow-y-auto h-full max-md:mt-10">
                {cartProductDetails.length ? cartProductDetails.map((product, index) => (
                    <div key={index} className="flex items-center justify-between mb-4 p-4 border-b max-lg:px-0">
                        <div className="flex items-center">
                            <Image
                                src={product.imageUrl}
                                alt={product.name || 'item'}
                                width={100}
                                height={50}
                                className="h-20 w-20 object-cover mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-sm text-gray-600">{product.message}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="text-lg font-semibold max-md:hidden">£{product.price}</span>
                            <input
                                type="number"
                                min="1"
                                value={product.quantity}
                                onChange={e => updateQuantity(index, e.target.value)}
                                className="ml-4 w-16 text-center border-2 border-gray-300 rounded-md max-md:w-8"
                            />
                            <button className='ml-5 text-sm bg-clay-red text-white py-1 px-3 rounded-md' onClick={() => handleRemoveFromCart(product.id)}>X</button>
                        </div>
                    </div>
                )) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Summary</h2>
                <div className="flex justify-between mt-2">
                    <span>Subtotal:</span>
                    <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Taxes (10%):</span>
                    <span>£{taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>£{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <h3 className="text-xl font-bold">Total:</h3>
                    <h3 className="text-xl font-bold">£{total.toFixed(2)}</h3>
                </div>
            </div>
        </main>
    )
};