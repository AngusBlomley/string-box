import React, { useState } from 'react';
import '../app/globals.css';
import Footer from "@/components/globals/footer";
import Header_global from "@/components/globals/headerGlobal";
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import SignInButton from '@/components/userDetails/googleSignIn';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { data: session } = useSession();

    if (session) {
        router.replace('/');
        return null;
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (result.error) {
            setError(result.error);
        } else if (result.url) {
            router.push("/");
        } else {
        }
    };

    return (
        <main>
            <Header_global />
            <div className="flex items-center justify-center h-screen bg-off-white">
                <div className="flex row bg-midnight-blue h-10/12 w-1/2 rounded-3xl p-10 justify-between max-xl:flex-col max-xl:p-0 max-xl:pb-10 max-md:w-screen">
                    <div className="w-100 p-8 text-off-white">
                        <h1 className="text-5xl">Welcome Back</h1>
                        <br />
                        <label htmlFor="username">Enter your name and password<br />to login.</label>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                        <form className="p-8 w-10/12" onSubmit={handleSignIn}>
                            <input
                                placeholder="Email"
                                type="email"
                                id="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                                required
                            />

                            <input
                                placeholder="Password"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-5 w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded"
                                required
                            />
                            <button
                                type="submit"
                                className="mt-5 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                Sign In
                            </button>
                            {error && <p className="text-red-500">Error: {error}</p>}
                        </form>
                        <div className="px-8 w-10/12">
                            <SignInButton />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};
