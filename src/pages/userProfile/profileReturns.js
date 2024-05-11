import React, { useState, useEffect } from 'react';
import Header_global from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import Link from 'next/link';
import axios from 'axios';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('/api/user/update', {
                    name: userData.name,
                    mobile: userData.mobile,
                    email: userData.email,
                    password: userData.password  // Ensure you handle password changes securely
                });
                alert('Information updated successfully!');
                setUserData(data => ({
                    ...data,
                    currentData: {
                        ...data.currentData,
                        name: data.name,
                        mobile: data.mobile,
                        email: data.email
                    }
                }));
            } catch (error) {
                console.error('Update failed:', error);
            }
        }
    };

    // Validate the form inputs
    const validateForm = () => {
        let valid = true;
        let newErrors = {};

        // Password validation
        if (userData.password !== userData.confirmPassword) {
            valid = false;
            newErrors.confirmPassword = "Passwords do not match!";
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userData.password)) {
            valid = false;
            newErrors.password = "Password must be at least 8 characters long and include at least one letter and one number.";
        }

        setErrors(newErrors);
        return valid;
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
                                    <Link href="./profileDetails">
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
                                    <Link style={{ fontWeight: '700' }} href="./profileReturns">
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
                                <div className="flex flex-col space-y-4">
                                    {[
                                        { id: "name", type: "text", label: "Name:", placeholder: "Name" },
                                        { id: "mobile", type: "tel", label: "Mobile:", placeholder: "Mobile" },
                                        { id: "email", type: "email", label: "Email:", placeholder: "Email" },
                                        { id: "password", type: "password", label: "Password:", placeholder: "Password" },
                                        { id: "confirmPassword", type: "password", label: "Confirm Password:", placeholder: "Confirm Password" }
                                    ].map((field, index) => (
                                        <div key={index} className="flex flex-col mb-3">
                                            {field.id !== 'password' && field.id !== 'confirmPassword' && (
                                                <div className="text-xs text-gray-500">
                                                    Current: {userData[field.id] || 'N/A'}
                                                </div>
                                            )}
                                            <div className="flex items-center">
                                                <label htmlFor={field.id} className="text-gray-700 text-sm font-bold mr-4 w-1/3">
                                                    {field.label}
                                                </label>
                                                <input
                                                    type={field.type}
                                                    id={field.id}
                                                    name={field.id}
                                                    placeholder={field.placeholder}
                                                    className="flex-1 px-3 py-2 leading-tight text-gray-700 border rounded"
                                                    value={userData[field.id]}
                                                    onChange={handleChange}
                                                    aria-describedby={field.id + "Error"}
                                                />
                                            </div>
                                            {errors[field.id] && (
                                                <p className="text-red-500 text-xs italic mt-1" id={field.id + "Error"}>
                                                    {errors[field.id]}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full mt-10 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
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
