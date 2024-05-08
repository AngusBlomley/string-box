
export default function AddressForm() {
    return(
        <form className="space-y-4 pb-10 border-b-2 border-gray-500">
        <div>
            <label className="block text-gray-700">First Name:</label>
            <input type="text" className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
        </div>
        <div>
            <label className="block text-gray-700">Last Name:</label>
            <input type="text" className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
        </div>
        <div>
            <label className="block text-gray-700">Mobile:</label>
            <input type="text" className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" placeholder="For delivery updates" />
        </div>
        <div>
            <label className="block text-gray-700">Address Line 1:</label>
            <input type="text" className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" placeholder="Street address, P.O. box, company name, c/o" />
        </div>
        <div>
            <label className="block text-gray-700">Address Line 2:</label>
            <input type="text" className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" placeholder="Apartment, suite, unit, building, floor, etc." />
        </div>
        <div>
            <label className="block text-gray-700">City:</label>
            <input type="text" className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
        </div>
        <div>
            <label className="block text-gray-700">State/Province/Region:</label>
            <input type="text" className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
        </div>
        <div>
            <label className="block text-gray-700">Postal Code:</label>
            <input type="text" className="form-input mt-1 block w-full border-gray-500 border-2 p-2 shadow-sm" />
        </div>
        <div>
            <label className="block text-gray-700">Country:</label>
            <select className="form-select mt-1 mb-8 block w-full p-2 border-gray-500 border-2 shadow-sm">
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
    </form>
    )
}