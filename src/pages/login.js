import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import Footer from "@/components/footer";
import Header_global from "@/components/headerGlobal";
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/userActions';


export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    return (
        <main>
            <Header_global />
            <div className="flex items-center justify-center h-screen bg-off-white">
                <div className="flex row bg-midnight-blue h-10/12 w-1/2 rounded-3xl p-10 justify-between max-xl:flex-col max-xl:p-0 max-xl:pb-10 max-md:w-screen">
                    <div className="w-100 p-8 text-off-white">

                        <h1 className="text-5xl">Welcome Back</h1>
                        <br></br>
                        <label>Enter your name and password<br></br> to login.</label>
                    </div>
                    <div className="flex justify-center">
                        <form className="p-8 w-10/12" onSubmit={handleSubmit}>
                            <input
                                placeholder="Email"
                                type="email"
                                id="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <input
                                placeholder="Password"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-5 w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded"
                            />
                            <button
                                type="submit"
                                className="mt-5 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};
