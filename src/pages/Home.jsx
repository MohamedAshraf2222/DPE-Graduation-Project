import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { icons, image1, image2 } from "../assets";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
const Home = () => {
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
      <div className="ad-wrapper d-flex j-between relative">
        <img src={image2} alt="img" />
        <img className="hero-icons" src={icons} alt="img" />
        <h2 className="hero-text">Get 50% Off on Selected categories</h2>
        <img src={image1} alt="img" />
      </div>
      <div className="products-heading">Products</div>
      <div className="products-wrapper d-flex f-wrap j-center">
        {allProduct.length > 0 ? (
          allProduct
            .filter((a, i) => i < 8)
            .map((product, i) => (
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
          <div className="loading-spinner my-10"></div>
        )}
      </div>
      <div className="d-flex j-center">
        <Link className="m-more-btn" to={"/allproducts"}>
          <button className="more-btn">See More</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
