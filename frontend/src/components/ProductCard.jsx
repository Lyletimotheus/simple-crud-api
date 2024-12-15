import PropTypes from "prop-types";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import EditProductModal from "./EditProductModal";
import { useState } from "react";

export default function ProductCard({ products }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Modal Behavior
  function close() {
    setIsOpen(false);
  }

  const editProduct = (product) => {
    setIsOpen(true);
    setSelectedProduct(product);
  };

  const deleteProduct = () => {
    console.log("Delete product");
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our latest list of products for sale
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product._id} className="group relative">
              <img
                src={product.image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <div>{product.name}</div>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  R {product.price}
                </p>
              </div>

              <div>
                Available: <span>{product.quantity}</span>
              </div>
              <div className="flex justify-between">
                <PencilIcon
                  className="w-5 h-5 text-yellow-500 cursor-pointer"
                  onClick={() => editProduct(product)}
                />
                <TrashIcon
                  className="w-5 h-5 text-red-500 cursor-pointer"
                  onClick={deleteProduct}
                />
              </div>

              {/* MODAL */}
              <EditProductModal
                isOpen={isOpen}
                close={close}
                selectedProduct={selectedProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  products: PropTypes.array,
};
