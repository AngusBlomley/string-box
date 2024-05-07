import Header_global from "./headerGlobal";
import Footer from "./footer";
import Cart from "./cart";
import CheckoutPage from "@/pages/checkoutPage";
import Image from "next/image";

export default function Checkout({ handleBackToCart }) {

    return (
        <main>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-10">
            <div className="bg-white rounded-3xl p-10 w-full max-w-4xl">
                
                <div><button onClick={handleBackToCart}>Return to Cart</button></div>
            </div>
        </div>
    </main>
    );
}