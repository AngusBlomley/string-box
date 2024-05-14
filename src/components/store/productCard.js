import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/actions/cartActions';
import Link from 'next/link';


function ProductCard({ product }) {
    const dispatch = useDispatch();

    const handleAddToCartClick = () => {
        const button = document.getElementById(`button-${product.id}`);
        if (button) {
            button.classList.add('animate-pulse');
            setTimeout(() => {
                button.classList.remove('animate-pulse');
            }, 300);
        }
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
        <div className="box-shadow duration-200 border rounded shadow-sm p-4 flex flex-col justify-between items-center h-full">
            <Link href={`/product/${product.id}`}>
                <Image
                    src={product.imageUrl || "/images/icons/racquet.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="mb-3 product-image"
                    unoptimized={true}
                />

                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2 text-center">{product.description}</p>
                    <p className="text-lg font-bold mb-4">£{product.price}</p>
                </div>
            </Link>
            <button
                id={`button-${product.id}`}
                onClick={handleAddToCartClick}
                className=" bg-grass-green text-white px-4 py-2 rounded hover:bg-green-700 mt-auto"
            >
                Add to Cart
            </button>
        </div>
    );

}

export default ProductCard;
