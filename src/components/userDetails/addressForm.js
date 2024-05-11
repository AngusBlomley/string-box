import React, { useState, useEffect } from 'react';
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
        country: '',
    });
    const { data: session, status } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            if (status !== "authenticated") {
                setError('User not authenticated');
                return;
            }
            setIsLoading(true);
            try {
                const userId = session.user.userId;
                console.log("UserID:", userId);
                const response = await axios.get(`/api/user?userId=${userId}`);
                if (response.data && response.data.address) {
                    setAddress(response.data.address); // Set the address if it's part of the user object
                }
                setError('');
            } catch (error) {
                console.error('Error fetching user:', error);
                setError('Error fetching user. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };

        if (session) {
            fetchUser();
        }
    }, [session, status]);

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('/api/user', {
                userId: session.user.userId,
                address
            }, {
                headers: {
                    // Assuming you are using Bearer token; adjust based on your authentication method
                    'Authorization': `Bearer ${session.accessToken}`
                }
            });
            setAddress(response.data);
            setMessage('Address saved successfully.');
            setError('');
        } catch (error) {
            console.error('Error saving address:', error);
            setError('Error saving address. Please try again.');
            if (error.response && error.response.status === 401) {
                // Redirect user to login page or handle unauthorized access
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
                        <input name="firstName" placeholder="First Name" value={address.firstName} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                        <input name="lastName" placeholder="Last Name" value={address.lastName} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                        <input name="mobile" placeholder="Mobile" value={address.mobile} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                        <input name="addressLine1" placeholder="Address Line 1" value={address.addressLine1} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                        <input name="addressLine2" placeholder="Address Line 2" value={address.addressLine2} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                        <input name="city" placeholder="City" value={address.city} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                        <input name="state" placeholder="State/Province/Region" value={address.state} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                        <input name="postalCode" placeholder="Postal Code" value={address.postalCode} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                        <select name="country" value={address.country} onChange={handleChange} className="form-select mt-1 block w-full p-2 border-gray-500 border-2 shadow-sm">
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
                        <button type="submit" className="w-full border-2 border-black text-black py-2 px-4 hover:bg-gray-100 focus:outline-none">Save Address</button>
                    </>
                ) : (
                    <>
                        <p>{`${address.firstName} ${address.lastName}`}</p>
                        <p>{address.mobile}</p>
                        <p>{`${address.addressLine1} ${address.addressLine2}`}</p>
                        <p>{`${address.city} ${address.state} ${address.postalCode}`}</p>
                        <p>{address.country}</p>
                        <button onClick={() => setIsEditing(true)} className="w-full border-2 border-black text-black py-2 px-4 hover:bg-gray-100 focus:outline-none">Edit Address</button>
                    </>
                )}
            </form>
        </div>
    );
}
