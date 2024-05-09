import Image from "next/image"
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';

export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const total = useSelector(state => state.cart.total);
    const router = useRouter();


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet, or there's an internal error with loading Stripe elements
            setError('Payment service is currently unavailable. Please try again later.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const cardElement = elements.getElement(CardElement);
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                console.error('Error:', error);
                setError(error.message);
                setLoading(false);
            } else {
                const response = await fetch('/api/stripe', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        paymentMethodId: paymentMethod.id,
                        amount: total,
                    }),
                });
                const paymentResult = await response.json();

                if (response.ok) {
                    router.push('/confirmationPage');
                } else {
                    console.error('Payment failed:', paymentResult.error);
                    setError(paymentResult.error || 'Payment failed, please try again.');
                    setLoading(false);
                }
            }
        } catch (error) {
            console.error('Payment processing error:', error);
            setError('Payment processing error. Please try again.');
            setLoading(false);
        }
    };

    return(
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* 
            <div>
                <label className="block text-gray-700">Card Number:</label>
                <input type="text" placeholder="•••• •••• •••• ••••" className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">Expiry Date:</label>
                    <input type="text" placeholder="MM/YY" className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                </div>
                <div>
                    <label className="block text-gray-700">CVV:</label>
                    <input type="text" placeholder="CVV" className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                </div>
            </div>
            <div>
                <label className="block text-gray-700">Name on Card:</label>
                <input type="text" className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
            </div>

            <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none">
                Submit Payment
            </button>
            */}

            <div className="flex row border-b-2 border-gray-500 items-center">
                <Image
                    alt="stripe"
                    src="/images/payments/stripe.png"
                    width={100}
                    height={20}
                    className="p-0 border-0 border-gray-500"
                />
                {/*
                <Image
                    alt="paypal"
                    src="/images/payments/paypal.png"
                    width={100}
                    height={20}
                    className=" ml-2 flex self-center border-0 border-gray-500"
                />
                */}
            </div>
            {error && <p className="error-message">{error}</p>}
            <CardElement />
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none"
                disabled={!stripe || loading}
            >
                {loading ? 'Processing...' : 'Pay with Stripe'}
            </button>
        </form>
    )
}