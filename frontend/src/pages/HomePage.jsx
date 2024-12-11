import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";

function HomePage() {
  const [listOfProducts, setListOfProducts] = useState([]);

  // TODO: INSTALL FORMIK AND IMPLEMENT CSV FOR INPUT FIELDS
  // TODO: CLEAN THIS FILE TO BE MORE MODULAR
  // TODO: MOVE DATA FETCHING TO GLOBAL REDUX STORE
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
        <Modal />
      </div>
      {listOfProducts.length !== 0 ? (
        <ProductCard products={listOfProducts} />
      ) : (
        <div>No products to show here...</div>
      )}
    </>
  );
}

export default HomePage;
