import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProductDetails = () => {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  const getData = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    getData();
    console.log(product);
  }, []);
  return (
    <>
      <Navbar />
      <div className="product-wrapper d-flex">
        <div className="productdetails-img">
          <img src={product.thumbnail} alt="" />
        </div>
        <div className="productdetails-info">
          <div className="newbadge">
            <p>New!</p>
          </div>
          <p className="product-details-heading-font">{product.title}</p>
          <p className="product-details-heading-font m-0">${product.price}</p>
          <p className="product-details-brand-font">Brand: {product.brand}</p>
          <p className="product-details-description-font">{product.description}</p>
          <p className="product-details-description-font">Stock & Availability: {product.stock}</p>
          <button className="add-to-card-btn">Add to Cart</button>
          <p className="product-details-description-font text-center d-none">Added to Cart</p>
        </div>
        {/* <img src={product.images[0]} alt="" /> */}
        {/* <img src={product.images[5]} alt="" /> */}
        {/* <img src={product.images[2]} alt="" /> */}
        {/* <img src={product.images[3]} alt="" /> */}
        {/* <img src={product.images[4]} alt="" /> */}
      </div>
    </>
  );
};

export default ProductDetails;
