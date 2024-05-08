import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddressForm() {
    const [formData, setFormData] = useState({
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
    const [isEditing, setIsEditing] = useState(false); // New state to manage edit mode
    const [isLoading, setIsLoading] = useState(true);  // State to handle loading
    const [message, setMessage] = useState('');       // For displaying messages

    // Fetch the address when the component mounts
    useEffect(() => {
        const fetchAddress = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('/api/addresses', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setFormData(response.data); // Assuming response.data contains the address fields
                setIsLoading(false);
            } catch (error) {
                setMessage('Failed to fetch address');
                setIsLoading(false);
            }
        };
        
        fetchAddress();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.log('No token available. Please log in.');
            return;
        }
    
        try {
            const response = await axios.post('/api/addresses', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Address saved successfully:', response.data);
            setMessage('Address saved successfully');
            setFormData(response.data.data);
            setIsEditing(false);
        } catch (error) {
            console.error('Error saving address:', error);
            setMessage('Error saving address');
        }
    };
    

    if (isLoading) return <p>Loading...</p>;

    return (
        <form className="space-y-4 pb-10 border-b-2 border-gray-500" onSubmit={handleSubmit}>
            {isEditing ? (
                <>
                <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                <input name="addressLine1" placeholder="Address Line 1" value={formData.addressLine1} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                <input name="addressLine2" placeholder="Address Line 2" value={formData.addressLine2} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                <input name="state" placeholder="State/Province/Region" value={formData.state} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                <input name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
                <select name="country" value={formData.country} onChange={handleChange} className="form-select mt-1 block w-full p-2 border-gray-500 border-2 shadow-sm">
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
                <button type="submit" onClick={() => setIsEditing(false)} className="w-full border-2 border-black text-black py-2 px-4 hover:bg-gray-100 focus:outline-none">Save Address</button>
            </>
            ) : (
                <>
                    <p>{`${formData.firstName} ${formData.lastName}`}</p>
                    <p>{formData.mobile}</p>
                    <p>{`${formData.addressLine1}, ${formData.addressLine2}`}</p>
                    <p>{`${formData.city}, ${formData.state} ${formData.postalCode}`}</p>
                    <p>{formData.country}</p>
                    <button onClick={() => setIsEditing(true)} className="w-full border-2 border-black text-black py-2 px-4 hover:bg-gray-100 focus:outline-none">Edit Address</button>
                </>
            )}
            {message && <p>{message}</p>}
        </form>
    );
}
