import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ posterUrl, price, title, description, id }) => {
  const [heartRed, setHeartRed] = useState(false);

  return (
    <>
      <div className="relative card-wrapper d-flex flex-col">
        <Link to={`/productdetails/${id}`}>
          <img className="poster-img" src={posterUrl} alt="poster" />
        </Link>

        <div
          onClick={() => setHeartRed(!heartRed)}
          className="absolute heart-icon-wrapper"
        >
          {heartRed ? (
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7663 2.32611C15.3753 1.90569 14.9111 1.57219 14.4002 1.34465C13.8893 1.11711 13.3417 1 12.7887 1C12.2357 1 11.6881 1.11711 11.1772 1.34465C10.6663 1.57219 10.2021 1.90569 9.81116 2.32611L8.9998 3.19821L8.18843 2.32611C7.39874 1.4773 6.32768 1.00044 5.21089 1.00044C4.09409 1.00044 3.02303 1.4773 2.23334 2.32611C1.44365 3.17492 1 4.32616 1 5.52656C1 6.72696 1.44365 7.87819 2.23334 8.727L3.0447 9.5991L8.9998 16L14.9549 9.5991L15.7663 8.727C16.1574 8.30679 16.4677 7.80785 16.6794 7.25871C16.891 6.70957 17 6.12097 17 5.52656C17 4.93214 16.891 4.34355 16.6794 3.7944C16.4677 3.24526 16.1574 2.74633 15.7663 2.32611Z"
                stroke="#FF1055"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="heart-icon"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7663 2.32611C15.3753 1.90569 14.9111 1.57219 14.4002 1.34465C13.8893 1.11711 13.3417 1 12.7887 1C12.2357 1 11.6881 1.11711 11.1772 1.34465C10.6663 1.57219 10.2021 1.90569 9.81116 2.32611L8.9998 3.19821L8.18843 2.32611C7.39874 1.4773 6.32768 1.00044 5.21089 1.00044C4.09409 1.00044 3.02303 1.4773 2.23334 2.32611C1.44365 3.17492 1 4.32616 1 5.52656C1 6.72696 1.44365 7.87819 2.23334 8.727L3.0447 9.5991L8.9998 16L14.9549 9.5991L15.7663 8.727C16.1574 8.30679 16.4677 7.80785 16.6794 7.25871C16.891 6.70957 17 6.12097 17 5.52656C17 4.93214 16.891 4.34355 16.6794 3.7944C16.4677 3.24526 16.1574 2.74633 15.7663 2.32611Z"
                stroke="black"
                stroke-opacity="0.5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>
        <div className="d-flex j-between info-card">
          <Link to={`/productdetails/${id}`}>
            <p>{title}</p>
          </Link>
          <Link to={`/productdetails/${id}`}>
            <p>{price}$</p>
          </Link>
        </div>
        <p className="description-card">{description}</p>
        {/* <div>ProductCard</div> */}
      </div>
    </>
  );
};

export default ProductCard;
