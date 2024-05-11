import { useSelector } from 'react-redux';
import PaymentForm from './paymentForm';
import CartItems from './cartItems';
import AddressForm from '../userDetails/addressForm';

export default function Checkout({ handleBackToCart }) {
    const totalAmount = useSelector(state => {
        const items = state.cart.items;
        const subtotal = items.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
        const taxes = subtotal * 0.1;  // 10% tax rate
        const shipping = 5;  // Assuming flat shipping rate
        return subtotal + taxes + shipping;
    });

    const handlePaymentSubmit = async (paymentData) => {
        try {
            const response = await fetch('/api/stripe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentData,
                    totalAmount,
                }),
            });

            if (response.ok) {
                // Payment successful, handle success scenario
                console.log('Payment successful');
            } else {
                // Payment failed, handle error scenario
                console.error('Payment failed');
            }
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    return (
        <main>
            <h1 className='mt-20 py-2 bg-off-white font-hiraKakuW8 text-center text-3xl'>CHECKOUT</h1>
            <div className="flex items-center justify-center my-5 bg-off-white">
                <div className="bg-white py-8 px-10 w-full max-w-4xl">
                    <div className="w-full pb-1 mb-4 border-b-2"><button onClick={handleBackToCart} className=" text-black py-1 rounded focus:outline-none hover:opacity-60">
                        Return to Cart
                    </button></div>
                    <div className="grid gap-6 grid-cols-2">
                        <div className="delivery-address">
                            <h2 className="font-semibold text-xl mb-4">Delivery Address</h2>
                            <AddressForm />
                            <h2>Payment</h2>
                            <PaymentForm totalAmount={totalAmount} onSubmit={handlePaymentSubmit} />
                        </div>

                        <div className="mt-4">
                            <h2 className="text-xl font-bold">Items for Checkout</h2>
                            <CartItems />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}