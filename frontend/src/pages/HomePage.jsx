import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import AddProductModal from "../components/AddProductModal";

function HomePage() {
  const [listOfProducts, setListOfProducts] = useState([]);

  // TODO: CLEAN THIS FILE TO BE MORE MODULAR BY USING REDUX
  // TODO: SETUP API FOLDER STRUCTURE
  // TODO: REFACTOR CODE TO BE MODULAR FOR THE MODAL SO IT CAN BE REUSED OVER AND OVER AGAIN
  // TODO: IMPROVE ERROR RESPONSE STRUCTURE ON BACKEND TO SHOW MESSAGE ON FE

  const getListOfProducts = async () => {
    const url = "http://localhost:9000/api/products";

    fetch(url)
      .then((res) => {
        if (!res) {
          throw new Error("Network response was not ok.");
        }
        return res.json();
      })
      .then((data) => {
        console.log("DATA", data);
        setListOfProducts(data);
      })
      .catch((error) => {
        console.error("ERROR", error);
      });
  };

  // GET LIST OF ALL PRODUCTS
  useEffect(() => {
    getListOfProducts();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-500 text-center pt-10">
          List of Products
        </h1>

        {/* MODAL */}
        <div className="pt-10">
          <AddProductModal
            setListOfProducts={setListOfProducts}
            listOfProducts={listOfProducts}
          />
        </div>
      </div>
      {listOfProducts.length !== 0 ? (
        <ProductCard
          listOfProducts={listOfProducts}
          setListOfProducts={setListOfProducts}
        />
      ) : (
        <div>No products to show here...</div>
      )}
    </>
  );
}

export default HomePage;
