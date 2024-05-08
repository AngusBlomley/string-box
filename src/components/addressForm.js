import React, { useState } from 'react';
import axios from 'axios';

export default function AddressForm() {
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
    
        if (!token) {
            console.log('No token available. Please log in.');
            // Optionally, redirect to login page or show a login prompt
            return;
        }
    
        try {
            const response = await axios.post('/api/addresses', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Address saved', response.data);
        } catch (error) {
            console.error('Error saving address', error);
        }
    };
    

    return (
        <form className="space-y-4 pb-10 border-b-2 border-gray-500" onSubmit={handleSubmit}>
            <div>
                <label className="block text-gray-700">First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
            </div>
            <div>
                <label className="block text-gray-700">Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
            </div>
            <div>
                <label className="block text-gray-700">Mobile:</label>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" placeholder="For delivery updates" />
            </div>
            <div>
                <label className="block text-gray-700">Address Line 1:</label>
                <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" placeholder="Street address, P.O. box, company name, c/o" />
            </div>
            <div>
                <label className="block text-gray-700">Address Line 2:</label>
                <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" placeholder="Apartment, suite, unit, building, floor, etc." />
            </div>
            <div>
                <label className="block text-gray-700">City:</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
            </div>
            <div>
                <label className="block text-gray-700">State/Province/Region:</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
            </div>
            <div>
                <label className="block text-gray-700">Postal Code:</label>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
            </div>
            <div>
                <label className="block text-gray-700">Country:</label>
                <select name="country" value={formData.country} onChange={handleChange} className="form-select mt-1 mb-8 block w-full p-2 border-gray-500 border-2 shadow-sm">
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
            </div>
            <button type="submit" className="w-full border-2 border-black text-black py-2 px-4 hover:bg-gray-100 focus:outline-none">
                Save Address
            </button>
            {message && <p>{message}</p>}
        </form>
    );
}
