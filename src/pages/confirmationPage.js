import Footer from "@/components/footer"
import Header_global from "@/components/headerGlobal"
import Link from "next/link"

export default function ConfirmationPage() { 

    
    return (
        <main>
            <Header_global />
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-10">
                <div className="bg-white p-10 w-full max-w-4xl">
                    <h1>Payment Confirmed</h1>
                        <p className="mb-10">Your payment was successful. An invoice has been sent to your email.</p>
                        <Link href="./store" className="w-full bg-grass-green text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none">Visit the shop!</Link>
                </div>
            </div>
            <Footer />
        </main>
    )
};