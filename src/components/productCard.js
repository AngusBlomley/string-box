import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';

function ProductCard({ product }) {
    const dispatch = useDispatch();

    const handleAddToCartClick = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="border rounded shadow-sm p-4 flex flex-col items-center">
            <Image
                src={product.imageUrl || "/images/icons/racquet.svg"}
                alt={product.name}
                width={200}
                height={200}
                className="mb-3"
                unoptimized={true}
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold">£{product.price}</p>
            <button onClick={handleAddToCartClick} className="bg-blue-500 text-white w-full px-4 py-2 rounded hover:bg-blue-700">
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;