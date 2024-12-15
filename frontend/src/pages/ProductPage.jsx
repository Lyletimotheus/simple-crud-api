import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductPage() {
  const [productDetails, setProductDetails] = useState(null);

  let { id } = useParams();

  // Get product details
  useEffect(() => {
    if (!productDetails) {
      fetch(`http://localhost:9000/api/products/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          if (!res) {
            throw new Error("Network response was not ok.");
          }
          return res.json();
        })
        .then((data) => {
          setProductDetails(data);
          console.log(data);
        })
        .catch((error) => {
          console.error("ERROR", error);
        });
    }
  }, [id, productDetails]);

  return (
    <>
      <div className="pt-10">
        <Link to="/">
          <button
            type="button"
            className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go Home
          </button>
        </Link>
      </div>
      <p className="text-3xl font-bold text-indigo-500 text-center pt-10">
        Product Details
      </p>
      <div className="text-2xl font-bold tracking-tight text-gray-900 text-center">
        <h1>{productDetails?.name}</h1>
        <h2>R {productDetails?.price}</h2>
      </div>
      <img
        src={productDetails?.image}
        className="aspect-square w-3/4 rounded-lg object-cover object-center mx-auto"
      />
    </>
  );
}

export default ProductPage;
