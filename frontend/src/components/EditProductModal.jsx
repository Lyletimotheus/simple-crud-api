import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Input from "./Input";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function EditProductModal({ isOpen, close, selectedProduct }) {
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
  });

  const handleSubmit = async (id) => {
    fetch(`http://localhost:9000/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.ok) {
          setUpdatedProduct({ name: "", quantity: "", price: "", image: "" });
        }
      })
      .catch((error) => {
        console.error({ message: error });
      });
  };

  const handleInputChange = (event) => {
    console.log(event);
    setUpdatedProduct({
      ...updatedProduct,
      [event.target.name]: event.target.value,
    });
  };

  // Set the modal field inputs the selected product details
  useEffect(() => {
    if (isOpen && selectedProduct) {
      setUpdatedProduct({
        name: selectedProduct.name || "",
        quantity: selectedProduct.quantity || "",
        price: selectedProduct.price || "",
        image: selectedProduct.image || "",
      });
    }
  }, [isOpen, selectedProduct]);
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-gray-400 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Add product details
              </DialogTitle>
              <form
                onSubmit={() => {
                  handleSubmit(selectedProduct._id);
                }}
              >
                <Input
                  labelName="Product Name"
                  name="name"
                  value={updatedProduct.name}
                  type="text"
                  placeholder="Product Name"
                  onChange={handleInputChange}
                />
                <Input
                  labelName="Product Quantity"
                  name="quantity"
                  value={updatedProduct.quantity}
                  type="number"
                  placeholder="Product Quantity"
                  onChange={handleInputChange}
                />
                <Input
                  labelName="Product Price"
                  name="price"
                  value={updatedProduct.price}
                  type="number"
                  placeholder="Product Price"
                  onChange={handleInputChange}
                />
                <Input
                  labelName="Product Image"
                  name="image"
                  value={updatedProduct.image}
                  type="text"
                  placeholder="Product Image"
                  onChange={handleInputChange}
                />
                <div className="mt-4">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default EditProductModal;

EditProductModal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  selectedProduct: PropTypes.object,
};
