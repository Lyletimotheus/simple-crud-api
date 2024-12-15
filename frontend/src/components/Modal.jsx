import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import Input from "./Input";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [addProductData, setAddProductData] = useState({
    name: "",
    quantity: 0,
    price: 0,
    image: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch("http://localhost:9000/api/products", {
      method: "POST",
      body: JSON.stringify(addProductData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).catch((error) => {
      console.error({ message: error });
    });
  };

  const handleInputChange = (event) => {
    setAddProductData({
      ...addProductData,
      [event.target.name]: event.target.value,
    });
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black/50 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Add a product
      </Button>

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
              <form onSubmit={handleSubmit}>
                <Input
                  labelName="Product Name"
                  name="name"
                  type="text"
                  placeholder="Product Name"
                  value={addProductData.name}
                  onChange={handleInputChange}
                />
                <Input
                  labelName="Product Quantity"
                  name="quantity"
                  type="number"
                  placeholder="Product Quantity"
                  value={addProductData.quantity}
                  onChange={handleInputChange}
                />
                <Input
                  labelName="Product Price"
                  name="price"
                  type="number"
                  placeholder="Product Price"
                  value={addProductData.price}
                  onChange={handleInputChange}
                />
                <Input
                  labelName="Product Image"
                  name="image"
                  type="text"
                  placeholder="Product Iamge"
                  value={addProductData.image}
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
