import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSession, signIn } from 'next-auth/react';
import Footer from "@/components/globals/footer";
import Header_global from "@/components/globals/headerGlobal";

export default function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const router = useRouter();
    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        router.push('/dashboard');
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');

        const { username, email, password, confirmPassword } = formData;

        if (!email || !email.includes('@') || password.length < 8 || password !== confirmPassword) {
            setError('Invalid email or password. Password should be at least 8 characters and must match.');
            return;
        }

        try {
            const response = await axios.post('/api/user/signup', {
                username,
                email,
                password
            });

            if (response.data.success) {
                const result = await signIn('credentials', {
                    redirect: false,
                    email,
                    password
                });

                if (result.error) {
                    setError(result.error);
                } else {
                    router.push('/');
                }
            } else {
                setError(response.data.message || 'Unable to sign up, please try again.');
            }
        } catch (error) {
            console.error('Error creating user:', error);
            setError(error.response?.data?.message || 'Error creating user.');
        }
    };


    return (
        <main className='bg-off-white'>
            <Header_global />
            <div className="flex items-center justify-center h-screen text-off-white">
                <div className="flex row bg-midnight-blue h-10/12 w-1/2 rounded-3xl p-10 justify-between max-xl:flex-col max-xl:p-0 max-xl:pb-10 max-md:w-screen">
                    <div className="w-100 p-8 max-xl:mx-auto">
                        <h1 className="text-5xl">Create Account</h1>
                        <br />
                        <label>Fill in the details to sign up.</label>
                    </div>
                    <div className="flex justify-center">
                        <form className="p-8 w-10/12 max-xl:p-0" onSubmit={handleSignUp}>
                            <input
                                aria-label="Username"
                                placeholder="Username"
                                type="text"
                                id="username"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                className="mt-5 w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                            />
                            <input
                                aria-label="Email"
                                placeholder="Email"
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="mt-5 w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                            />
                            <input
                                aria-label="Password"
                                placeholder="Password"
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="mt-5 w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                            />
                            <input
                                aria-label="Confirm Password"
                                placeholder="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                className="mt-5 w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                            />
                            {error && <div className="error-message text-red-500">{error}</div>}
                            <button
                                type="submit"
                                className="mt-5 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
