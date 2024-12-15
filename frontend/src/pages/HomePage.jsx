import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import AddProductModal from "../components/AddProductModal";

function HomePage() {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getListOfProducts = async () => {
    setLoading(true);
    fetch("http://localhost:9000/api/products")
      .then((res) => {
        if (!res) {
          throw new Error("Network response was not ok.");
        }
        return res.json();
      })
      .then((data) => {
        setListOfProducts(data);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("ERROR", error);
      });
  };

  // Get list of products
  useEffect(() => {
    getListOfProducts();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-500 text-center pt-10">
          Product Inventory
        </h1>

        {/* ADD PRODUCT MODAL */}
        <div className="pt-10">
          <AddProductModal
            setListOfProducts={setListOfProducts}
            listOfProducts={listOfProducts}
          />
        </div>
      </div>

      {/* LIST OF PRODUCTS */}
      {loading ? (
        <div>Products loading...</div>
      ) : listOfProducts.length === 0 ? (
        <div>No products at this moment</div>
      ) : (
        <ProductCard
          listOfProducts={listOfProducts}
          setListOfProducts={setListOfProducts}
        />
      )}
    </>
  );
}

export default HomePage;
