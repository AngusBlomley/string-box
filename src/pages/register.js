// pages/signup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Footer from "@/components/footer";
import Header_global from "@/components/headerGlobal";
import { signupUser } from '../store/actions/userActions';


export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        dispatch(signupUser({ email, password }));
    };

    return (
        <main>
            <Header_global />
            <div className="flex items-center justify-center h-screen text-off-white">
                <div className="flex row bg-midnight-blue h-10/12 w-1/2 rounded-3xl p-10 justify-between max-xl:flex-col max-xl:p-0 max-xl:pb-10 max-md:w-screen">
                    <div className="w-100 p-8 max-xl:mx-auto">
                        <h1 className="text-5xl">Create Account</h1>
                        <br></br>
                        <label>Fill in the details to sign up.</label>
                    </div>
                    <div className="flex justify-center">
                        <form className="p-8 w-10/12 max-xl:p-0" onSubmit={handleSignUp}>
                            <input
                                placeholder="Username"
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <input
                                placeholder="Email"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-5 w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <input
                                placeholder="Password"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-5 w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <input
                                placeholder="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="mt-5 w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

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
};
