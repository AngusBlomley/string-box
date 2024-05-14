// Store Component
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../app/globals.css';
import Footer from "@/components/globals/footer";
import Header_global from "@/components/globals/headerGlobal";
import ProductCard from "@/components/store/productCard";
import { addToCart } from '@/store/actions/cartActions';

export default function Store() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // Add search term state
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const [strings, setStrings] = useState({
        polyester: false,
        solidCore: false,
        multiFiber: false,
        naturalGut: false,
        other: false
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

    useEffect(() => {
        console.log("Fetching products...");
        fetch('/data/products.json')
            .then(response => response.json())
            .then(data => {
                console.log("Products loaded:", data);
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch(error => {
                console.error('Error loading the products:', error);
            });
    }, []);

    const handleAddToCart = (product) => {
        const productToAdd = {
            ...product,
            quantity: 1
        };
        dispatch(addToCart(productToAdd));
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        if (Object.keys(strings).includes(name)) {
            setStrings(prevStrings => ({ ...prevStrings, [name]: checked }));
        } else {
            setBrands(prevBrands => ({ ...prevBrands, [name]: checked }));
        }
    };

    useEffect(() => {
        const filterProducts = () => {
            let filtered = products;

            // Filter by string types
            const selectedStringTypes = Object.keys(strings).filter(key => strings[key]);
            if (selectedStringTypes.length > 0) {
                filtered = filtered.filter(product => selectedStringTypes.includes(product.stringType));
            }

            // Filter by brands
            const selectedBrands = Object.keys(brands).filter(key => brands[key]);
            if (selectedBrands.length > 0) {
                filtered = filtered.filter(product => selectedBrands.includes(product.brand));
            }

            // Filter by search term
            if (searchTerm) {
                filtered = filtered.filter(product =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            setFilteredProducts(filtered);
        };

        filterProducts();
    }, [strings, brands, searchTerm, products]);

    const toggleMobileFilter = () => {
        setIsMobileFilterOpen(!isMobileFilterOpen);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <main className="bg-off-white">
            <Header_global cartCount={cart.totalCount} />
            <section className="mt-20 p-4 w-full border lg:hidden">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[#0d0d0d] mb-2">Filters</h3>
                    <button onClick={toggleMobileFilter} className="focus:outline-none">
                        {isMobileFilterOpen ? (
                            <span>&#9650;</span> // Arrow up
                        ) : (
                            <span>&#9660;</span> // Arrow down
                        )}
                    </button>
                </div>
                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isMobileFilterOpen ? 'max-h-screen' : 'max-h-0'
                        }`}
                >
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-[#0d0d0d] mb-2">String Type</h3>
                            <form className="grid grid-cols-2 gap-0">
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
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="other"
                                        name="other"
                                        checked={strings.other}
                                        onChange={handleCheckboxChange}
                                        className="form-checkbox text-blue-600"
                                    />
                                    <span className="ml-2 text-[#0f0f0f]">Other</span>
                                </label>
                            </form>
                            <h3 className="text-lg font-semibold text-[#0d0d0d] mt-4 mb-2">Brands</h3>
                            <form className="grid grid-cols-2 gap-0">
                                {Object.keys(brands).map((brand, index) => (
                                    <label key={index} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name={brand}
                                            checked={brands[brand]}
                                            onChange={handleCheckboxChange}
                                            className="form-checkbox text-blue-600 mr-2"
                                        />
                                        <span className="ml-2 text-[#0f0f0f]">{brand}</span>
                                    </label>
                                ))}
                            </form>
                        </div>
                    </div>

                </div>
            </section>
            <div className="flex row mt-20 mb-20 justify-between px-40 max-xl:p-10 max-lg:p-0">
                <section className="bg-white mt-10 p-10 w-80 h-full border max-lg:hidden max-lg:p-0">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-[#0d0d0d] mb-2">String Type</h3>
                            <form className="space-y-2">
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
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="other"
                                        name="other"
                                        checked={strings.other}
                                        onChange={handleCheckboxChange}
                                        className="form-checkbox text-blue-600"
                                    />
                                    <span className="ml-2 text-[#0f0f0f]">Other</span>
                                </label>
                                <h3 className="text-lg font-semibold text-[#0d0d0d] mb-2">Brands</h3>
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
                            </form>
                        </div>
                    </div>
                </section>
                <section className="p-10 w-full max-lg:p-4">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 bg-white">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    addToCart={handleAddToCart}
                                />
                            ))
                        ) : (
                            <h2 className='text-center font-bold font-hiraKakuW4 text-slate-800 text-3xl'>Nothing Here...</h2>
                        )}
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
