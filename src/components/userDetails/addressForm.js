import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useSession } from "next-auth/react";

export default function AddressForm() {
    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
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
                const response = await axios.get(`/api/user/user?userId=${userId}`, {
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
            const response = await axios.put(`/api/user/user?userId=${userId}`, { address }, {
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
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {message && <p>{message}</p>}
            <form className="space-y-4 pb-5" onSubmit={handleSubmit}>
                {isEditing ? (
                    <>
                        <input
                            name="firstName"
                            placeholder="First Name"
                            value={address.firstName}
                            onChange={handleChange}
                            className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm"
                        />
                        <input
                            name="lastName"
                            placeholder="Last Name"
                            value={address.lastName}
                            onChange={handleChange}
                            className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm"
                        />
                        <input
                            name="mobile"
                            placeholder="Mobile"
                            value={address.mobile}
                            onChange={handleChange}
                            className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm"
                        />
                        <input
                            name="addressLine1"
                            placeholder="Address Line 1"
                            value={address.addressLine1}
                            onChange={handleChange}
                            className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm"
                        />
                        <input
                            name="addressLine2"
                            placeholder="Address Line 2"
                            value={address.addressLine2}
                            onChange={handleChange}
                            className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm"
                        />
                        <input
                            name="city"
                            placeholder="City"
                            value={address.city}
                            onChange={handleChange}
                            className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm"
                        />
                        <input
                            name="state"
                            placeholder="State/Province/Region"
                            value={address.state}
                            onChange={handleChange}
                            className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm"
                        />
                        <input
                            name="postalCode"
                            placeholder="Postal Code"
                            value={address.postalCode}
                            onChange={handleChange}
                            className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm"
                        />
                        <select
                            name="country"
                            value={address.country}
                            onChange={handleChange}
                            className="form-select mt-1 block w-full p-2 border-gray-500 border-2 shadow-sm"
                        >
                            <option value="UK">United Kingdom</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                            <option value="IT">Italy</option>
                            <option value="ES">Spain</option>
                            <option value="NL">Netherlands</option>
                            <option value="SE">Sweden</option>
                            <option value="PL">Poland</option>
                            <option value="BE">Belgium</option>
                        </select>
                        <button
                            type="submit"
                            className="w-full border-2 border-black text-black py-2 px-4 hover:bg-gray-100 focus:outline-none"
                        >
                            Save Address
                        </button>
                    </>
                ) : (
                    <>
                        <p>{`${address.firstName} ${address.lastName}`}</p>
                        <p>{address.mobile}</p>
                        <p>{`${address.addressLine1} ${address.addressLine2}`}</p>
                        <p>{`${address.city} ${address.state} ${address.postalCode}`}</p>
                        <p>{address.country}</p>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="w-full border-2 border-black text-black py-2 px-4 hover:bg-gray-100 focus:outline-none"
                        >
                            Edit Address
                        </button>
                    </>
                )}
            </form>
        </div>
    );
}
