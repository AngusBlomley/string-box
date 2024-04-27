import Image from 'next/image';

function ProductCard({ product }) {
    return (
        <div className="border rounded shadow-sm p-4 flex flex-col items-center">
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="mb-3"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold">{product.price}</p>
            <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;