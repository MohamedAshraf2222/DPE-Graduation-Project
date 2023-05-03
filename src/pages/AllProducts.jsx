import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ClipLoader from "react-spinners/ClipLoader";

const AllProducts = () => {
  const [allProduct, setAllProduct] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    setAllProduct(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="products-heading">All Products</div>
      <div className="products-wrapper d-flex f-wrap j-center">
        {allProduct.length > 0 ? (
          allProduct.map((product, i) => (
            <ProductCard
              key={i}
              posterUrl={product.thumbnail}
              price={product.price}
              title={product.title}
              description={product.description}
              id={product.id}
            />
          ))
        ) : (
            <div className="loading-spinner mt-10"></div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
