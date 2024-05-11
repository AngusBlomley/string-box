import React, { useState } from 'react';
import '../app/globals.css';
import Footer from "@/components/globals/footer";
import Header_global from "@/components/globals/headerGlobal";
import { useRouter } from 'next/router';
import SignInButton from '@/components/userDetails/googleSignIn';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState('');
    const router = useRouter();
    const [error, setError] = useState(''); // Initialize the error state

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setError('');  // Clear previous errors

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password
        });

        if (result.error) {
            console.error('Sign-in error:', result.error);
            setError(result.error);
            setSubmitting(false);
        } else if (result.ok) {
            router.push('/'); // Redirect on successful login
        } else {
            setError('Unexpected error occurred. Please try again.');
            setSubmitting(false);
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
                    <div className="flex justify-center flex-col items-center"> {/* Modified */}
                        <form className="p-8 w-10/12" onSubmit={handleSubmit}>
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
                            {error && <p className="text-red-500">Error: {error}</p>}
                            <button
                                type="submit"
                                className="mt-5 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                disabled={submitting}
                            >
                                {submitting ? 'Submitting...' : 'Sign In'}
                            </button>
                            {loginError && <div className="error">{loginError}</div>}
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
