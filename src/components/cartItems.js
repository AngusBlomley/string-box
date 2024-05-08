import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import productsData from '../../public/data/products.json';
import { removeFromCart } from '../store/actions/cartActions';
import Image from 'next/image';

export default function CartItems({ handleCheckout }) {    
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [cartProductDetails, setCartProductDetails] = useState([]);
    const [total, setTotal] = useState(0);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    useEffect(() => {    
        const validItems = cartItems.filter(item => item && typeof item === 'object' && 'id' in item);
        const details = cartItems.map(item => {
            const product = item.isCustom ? null : productsData.find(p => p.id === item.id);
            console.log("Product found:", product);
            return product ? {...product, quantity: item.quantity} : {...item, quantity: item.quantity || 1};
        });
        console.log("Mapped product details:", details);
        setCartProductDetails(details.filter(product => product && product.id));
    }, [cartItems]);
    
    
    useEffect(() => {
        console.log("Final cart product details for rendering:", cartProductDetails);
        const newTotal = cartProductDetails.reduce((acc, product) => acc + product.price * product.quantity, 0);
        setTotal(newTotal);
    }, [cartProductDetails]);

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
            <div className="overflow-y-auto h-full">
                {cartProductDetails.length ? cartProductDetails.map((product, index) => (
                    <div key={index} className="flex items-center justify-between mb-4 p-4 border-b">
                        <div className="flex items-center">
                            <Image
                                src={product.imageUrl}
                                alt={product.name || 'item'}
                                width={100}
                                height={50}
                                className="h-20 w-20 object-cover rounded-full mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-sm text-gray-600">{product.message}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="text-lg font-semibold">£{product.price}</span>
                            <input
                                type="number"
                                min="1"
                                value={product.quantity}
                                onChange={e => updateQuantity(index, e.target.value)}
                                className="ml-4 w-16 text-center border-2 border-gray-300 rounded-md"
                            />
                            <button className='ml-5 text-sm bg-clay-red text-white py-1 px-3 rounded-md' onClick={() => handleRemoveFromCart(product.id)}>X</button>
                        </div>
                    </div>
                )) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Total: £{total.toFixed(2)}</h2>
                <button
                    type="button"
                    className="mt-4 px-6 py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                    onClick={handleCheckout}
                >
                    Proceed to Checkout
                </button>
            </div>
        </main>
    )
};