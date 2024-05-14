// pages/product/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header_global from '@/components/globals/headerGlobal';
import Footer from '@/components/globals/footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/actions/cartActions';
import products from '/public/data/products.json';

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            const foundProduct = products.find((p) => p.id === parseInt(id));
            setProduct(foundProduct);
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToCartClick = () => {
        dispatch(addToCart(product));
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.classList.add('animate-scale');
            setTimeout(() => {
                cartCountElement.classList.remove('animate-scale');
            }, 300);
        }
    };

    return (
        <main className='bg-off-white'>
            <Header_global />
            <div className="container bg-white mx-auto min-h-screen w-8/12 p-20 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="flex flex-colr">
                        <Image
                            src={product.imageUrl || "/images/icons/racquet.svg"}
                            alt={product.name}
                            width={120}
                            height={300}
                            className="mb-4 border-2 p-4 object-contain self-start"
                        />
                        <Image
                            src={product.imageUrl || "/images/icons/racquet.svg"}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="mb-4 border-2 p-4 object-contain"
                        />
                    </div>

                    <div>
                        <div className="mt-4">
                            <p className='text-grass-green font-hiraKakuW8 text-sm'>IN STOCK</p>
                            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                            <p className="text-lg mb-4">{product.description}</p>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xl font-semibold">Quantity:</span>
                            <div className="flex items-center">
                                <button className="px-2 py-1 border rounded">-</button>
                                <input
                                    type="text"
                                    className="w-12 text-center mx-2 border rounded"
                                    value="1"
                                    readOnly
                                />
                                <button className="px-2 py-1 border rounded">+</button>
                            </div>
                        </div>
                        <button
                            onClick={handleAddToCartClick}
                            className="w-full bg-grass-green text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                            Add To Cart
                        </button>
                        <div className="mt-4 text-center">
                            <span className="text-sm text-gray-600">Ships Tomorrow</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Description</h2>
                        <p className="mb-4">{product.detailedDescription}</p>
                    </div>

                    <div className="mt-8">
                        <h2 className=" leading-loose text-2xl font-bold mb-4">Specification</h2>
                        <ul>
                            <li><strong>Type:</strong> {product.specifications.Type}</li>
                            <li><strong>Colour:</strong> {product.specifications.Colour}</li>
                            <li><strong>Profile:</strong> {product.specifications.Profile}</li>
                            <li><strong>Gauge:</strong> {product.specifications.Gauge}</li>
                            <li><strong>Length:</strong> {product.specifications.Length}</li>
                            <li><strong>Series:</strong> {product.specifications.Series}</li>
                            <li><strong>Made In:</strong> {product.specifications.MadeIn}</li>
                            <li><strong>Manufacturer SKU:</strong> {product.specifications.ManufacturerSKU}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default ProductDetails;
