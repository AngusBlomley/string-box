import React, { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import Header_global from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import Link from 'next/link';
import axios from 'axios';

export default function ProfileDetails() {
    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        password: '',
        mobile: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        country: 'UK',
    });
    const { data: session, status } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddress(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const fetchUser = useCallback(async () => {
        if (status === "authenticated") {
            setIsLoading(true);
            try {
                const userId = session.user.id;
                const response = await axios.get(`/api/user/index?userId=${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${session.accessToken}`
                    }
                });
                const fetchedAddress = response.data.address[0];
                if (fetchedAddress) {
                    setAddress(prevState => ({ ...prevState, ...fetchedAddress }));
                }
                setError('');
            } catch (error) {
                console.error('Error fetching user:', error);
                setError('Error fetching user. Please try again.');
            } finally {
                setIsLoading(false);
            }
        } else {
            setError('User not authenticated');
        }
    }, [session, status]);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!session) {
            setError('User is not authenticated.');
            return;
        }

        console.log('Address state before submission:', address);

        if (!address.firstName || !address.lastName || !address.mobile || !address.addressLine1 || !address.city || !address.state || !address.postalCode || !address.country) {
            setError('Please fill in all required fields.');
            return;
        }

        setIsLoading(true);
        const userId = session.user.id;
        try {
            const response = await axios.put(`/api/user/index?userId=${userId}`, { address }, {
                headers: {
                    'Authorization': `Bearer ${session.accessToken}`
                }
            });
            setAddress(response.data.user.address[0]); // Adjust according to response structure
            setMessage('Address saved successfully.');
            setError('');
            setIsEditing(false); // Switch to view mode after saving
        } catch (error) {
            console.error('Error saving address:', error);
            setError('Error saving address. Please try again.');
            if (error.response) {
                if (error.response.status === 401) {
                    setError('You are not authorized to perform this operation.');
                } else if (error.response.status >= 400 && error.response.status < 500) {
                    setError(`Failed to save address due to a client error: ${error.response.data?.message}`);
                } else if (error.response.status >= 500) {
                    setError('Server error, please try again later.');
                }
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main>
            <Header_global />
            <div className="h-screen bg-off-white font-hiraKakuW8 text-stone-800 flex flex-col justify-center items-center max-lg:h-full max-lg:pb-20">
                <div>
                    <h1 className="text-5xl ml-10 mb-20 max-lg:mt-40 max-sm:text-center max-sm:mb-10 max-sm:ml-0 max-lg:text-4xl">My Details</h1>
                    <div className='grid grid-cols-2 gap-x-16 gap-y-24 px-10 max-lg:grid-cols-2 max-lg:gap-y-10 max-sm:grid-cols-1'>

                        <div className=' flex items-center border-stone-800 border-r-2 text-center'>
                            <ul>
                                <li>
                                    <Link style={{ fontWeight: '700' }} href="./profileDetails">
                                        My Details
                                    </Link>
                                </li><br />
                                <li>
                                    <Link href="./profileAddress">
                                        Address
                                    </Link>
                                </li><br />
                                <li>
                                    <Link href="./profileOrders">
                                        Orders
                                    </Link>
                                </li><br />
                                <li>
                                    <Link href="./profileReturns">
                                        Returns
                                    </Link>
                                </li><br />
                                <li>
                                    <Link href="./profilePayment">
                                        Payment
                                    </Link>
                                </li><br />
                            </ul>
                        </div>

                        <div className="flex">
                            <form className="w-full" onSubmit={handleSubmit}>
                                <div className="flex flex-col mb-3">
                                    <div className="text-xs text-gray-500">
                                        First Name: {address.firstName || 'N/A'}
                                    </div>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="px-3 py-2 leading-tight text-gray-700 border rounded"
                                        value={address.firstName}
                                        onChange={handleChange}
                                        aria-describedby="firstNameError"
                                    />
                                    {error.firstName && (
                                        <p className="text-red-500 text-xs italic mt-1" id="firstNameError">
                                            {error.firstName}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col mb-3">
                                    <div className="text-xs text-gray-500">
                                        Last Name: {address.lastName || 'N/A'}
                                    </div>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="px-3 py-2 leading-tight text-gray-700 border rounded"
                                        value={address.lastName}
                                        onChange={handleChange}
                                        aria-describedby="lastNameError"
                                    />
                                    {error.lastName && (
                                        <p className="text-red-500 text-xs italic mt-1" id="lastNameError">
                                            {error.lastName}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col mb-3">
                                    <div className="text-xs text-gray-500">
                                        Mobile: {address.mobile || 'N/A'}
                                    </div>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        placeholder="Mobile"
                                        className="px-3 py-2 leading-tight text-gray-700 border rounded"
                                        value={address.mobile}
                                        onChange={handleChange}
                                        aria-describedby="mobileError"
                                    />
                                    {error.mobile && (
                                        <p className="text-red-500 text-xs italic mt-1" id="mobileError">
                                            {error.mobile}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col mb-3">
                                    <div className="text-xs text-gray-500">
                                        Email: {address.email || 'N/A'}
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        className="px-3 py-2 leading-tight text-gray-700 border rounded"
                                        value={address.email}
                                        onChange={handleChange}
                                        aria-describedby="emailError"
                                    />
                                    {error.email && (
                                        <p className="text-red-500 text-xs italic mt-1" id="emailError">
                                            {error.email}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col mb-3">
                                    <div className="text-xs text-gray-500">
                                        Password: {address.password || 'N/A'}
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        className="px-3 py-2 leading-tight text-gray-700 border rounded"
                                        value={address.password}
                                        onChange={handleChange}
                                        aria-describedby="passwordError"
                                    />
                                    {error.password && (
                                        <p className="text-red-500 text-xs italic mt-1" id="passwordError">
                                            {error.password}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col mb-3">
                                    <div className="text-xs text-gray-500">
                                        Confirm Password: {address.confirmPassword || 'N/A'}
                                    </div>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        className="px-3 py-2 leading-tight text-gray-700 border rounded"
                                        value={address.confirmPassword}
                                        onChange={handleChange}
                                        aria-describedby="confirmPasswordError"
                                    />
                                    {error.confirmPassword && (
                                        <p className="text-red-500 text-xs italic mt-1" id="confirmPasswordError">
                                            {error.confirmPassword}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-10 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                >
                                    Save Info and Change Password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};
