import React, { useState, useEffect } from 'react';
import Header_global from "@/components/headerGlobal";
import Footer from "@/components/footer";
import Link from 'next/link';
import axios from 'axios';
import Orders from '@/components/orders';

export default function ProfileDetails() {
    const [userData, setUserData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
        currentData: {}  // Store the fetched user data separately
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await axios.get('/api/user');
                setUserData(data => ({
                    ...data,
                    currentData: response.data,  // Populate currentData with fetched data
                    ...response.data  // Populate input fields if you want them pre-filled
                }));
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        }

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <main>
            <Header_global />
            <div className="h-screen bg-off-white font-hiraKakuW8 text-stone-800 flex flex-col justify-center items-center max-lg:h-full max-lg:pb-20">
                <div>
                    <h1 className="text-5xl ml-10 mb-20 max-lg:mt-40 max-sm:text-center max-sm:mb-10 max-sm:ml-0 max-lg:text-4xl">My Details</h1>
                    <div className='grid grid-cols-2 gap-x-16 gap-y-24 px-10 max-lg:grid-cols-2 max-lg:gap-y-10 max-sm:grid-cols-1'>

                        <div className='flex items-center px-20 border-stone-800 border-r-2 text-center'>
                            <ul>
                                <li>
                                    <Link href="./profileDetails">
                                        My Details
                                    </Link>
                                </li><br/>
                                <li>
                                    <Link href="./profileAddress">
                                        Address
                                    </Link>
                                </li><br/>
                                <li>
                                    <Link style={{fontWeight: '700'}} href="./profileOrders">
                                        Orders
                                    </Link>
                                </li><br/>
                                <li>
                                    <Link href="./profileReturns">
                                        Returns
                                    </Link>
                                </li><br/>
                                <li>
                                    <Link href="./profilePayment">
                                        Payment
                                    </Link>
                                </li><br/>
                            </ul>
                        </div>

                        <div className="flex">
                           <Orders />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};
