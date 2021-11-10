import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { headers } from "./constants";
import "./transactions.css";

const TransactionDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [clicked, setClicked] = useState(false);
  const { transactionDetaislData } = useSelector((state) => state.transactions);
  const id = location?.search?.split("=")?.pop();
  const data = transactionDetaislData[id];

  useEffect(() => {
    if (clicked) {
      navigate("/");
    }
  }, [clicked, navigate]);
  return (
    <div className="transactionn-detail-wrapper">
      <h1>{`Transaction ${id}`}</h1>
      {data && (
        <div className="details-content">
          {headers.map((header) => {
            return (
              <div key={`details-${header.label}`}>
                <label>{header.label}:</label>
                <span>{data[header.field]}</span>
              </div>
            );
          })}
        </div>
      )}
      <button
        onClick={() => {
          setClicked(true);
          // navigate("/");
        }}
      >
        Go Back
      </button>
      <br />
      {clicked && <div> Please wait... </div>}
    </div>
  );
};

export default TransactionDetails;
