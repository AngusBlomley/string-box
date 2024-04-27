import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import Footer from "@/components/footer";
import Header_global from "@/components/headerGlobal";
import ProductCard from "@/components/productCard";

export default function Store() {
    const [strings, setStrings] = useState({
        polyester: false,
        solidCore: false,
        multiFiber: false,
        naturalGut: false
    });

    const [brands, setBrands] = useState({
        Babolat: false,
        Head: false,
        Wilson: false,
        Prince: false,
        Yonex: false,
        Dunlop: false,
        Volkl: false,
        Pacific: false,
        KSwiss: false,
        Prokennex: false,
        BruceLee: false,
        Donnay: false,
        Gosen: false,
        Victor: false,
        Tecnifibre: false
    });

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/data/products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error loading the products:', error));
    }, []);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        if (Object.keys(strings).includes(name)) {
            setStrings(prevStrings => ({ ...prevStrings, [name]: checked }));
        } else {
            setBrands(prevBrands => ({ ...prevBrands, [name]: checked }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Selected Strings:", strings);
        console.log("Selected Brands:", brands);
    };

    return (
        <main className="bg-[#eff0f3] font-[azo-sans-web,sans-serif]">
            <Header_global />
            <div className="flex row mt-20 justify-between px-40">
                <section className="mt-10 p-10 w-80">
                    <h2 className="text-xl font-bold text-[#0d0d0d] mb-4">Filter</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-[#0d0d0d] mb-2">String Type</h3>
                            <form onSubmit={handleSubmit} className="space-y-2">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="polyester"
                                        name="polyester"
                                        checked={strings.polyester}
                                        onChange={handleCheckboxChange}
                                        className="form-checkbox text-blue-600"
                                    />
                                    <span className="ml-2 text-[#0f0f0f]">Polyester</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="solidCore"
                                        name="solidCore"
                                        checked={strings.solidCore}
                                        onChange={handleCheckboxChange}
                                        className="form-checkbox text-blue-600"
                                    />
                                    <span className="ml-2 text-[#0f0f0f]">Solid Core</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="multiFiber"
                                        name="multiFiber"
                                        checked={strings.multiFiber}
                                        onChange={handleCheckboxChange}
                                        className="form-checkbox text-blue-600"
                                    />
                                    <span className="ml-2 text-[#0f0f0f]">Multi Fiber</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="naturalGut"
                                        name="naturalGut"
                                        checked={strings.naturalGut}
                                        onChange={handleCheckboxChange}
                                        className="form-checkbox text-blue-600"
                                    />
                                    <span className="ml-2 text-[#0f0f0f]">Natural Gut</span>
                                </label>
                                <h3 className="text-lg font-semibold text-[#0d0d0d] mb-2 ">Brands</h3>
                                {Object.keys(brands).map((brand, index) => (
                                    <label key={index} className="block">
                                        <input
                                            type="checkbox"
                                            name={brand}
                                            checked={brands[brand]}
                                            onChange={handleCheckboxChange}
                                            className="form-checkbox text-blue-600 mr-2"
                                        />
                                        {brand}
                                    </label>
                                ))}
                                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700" type="submit">
                                    Apply Filter
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="p-10 w-full">
                    <h2 className="text-xl font-bold text-[#0d0d0d] mb-4">Our Products</h2>
                    <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
