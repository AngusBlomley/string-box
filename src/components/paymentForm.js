import Image from "next/image"

export default function PaymentForm() {
    return(
        <form className="space-y-4">
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

                            <h2>We Accept:</h2>
                            <div className="grid grid-cols-2 gap-10">
                                <button
                                    type="button"
                                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none"
                                    onClick={() => handleStripePayment()}
                                >
                                    Pay with Stripe
                                </button>
                                <Image
                                    alt="stripe"
                                    src="/images/payments/stripe.png"
                                    width={100}
                                    height={20}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-10">
                                <button
                                    type="button"
                                    className="w-full bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 focus:outline-none"
                                    onClick={() => handlePayPalPayment()}
                                >
                                    Pay with PayPal
                                </button>
                                <Image
                                    alt="stripe"
                                    src="/images/payments/paypal.png"
                                    width={100}
                                    height={20}
                                    className="flex self-center"
                                />
                            </div>
                        </form>
    )
}