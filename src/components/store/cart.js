import CartItems from './cartItems';

export default function Cart({ handleCheckout }) {


    return (
        <main>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-10">
                <div className="bg-white p-10 w-full max-w-4xl">
                    <CartItems />
                    <button
                        type="button"
                        className="mt-4 px-6 py-2 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                        onClick={handleCheckout}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </main>
    )
};