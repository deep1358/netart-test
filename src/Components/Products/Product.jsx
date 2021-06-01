import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="products">
      <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <p>CHEMICALS & PROCESS</p>
        <p>POWER</p>
        <p>WATER & WASTE WATER</p>
        <p>OILS & GAS</p>
        <p> PHARMA </p>
        <p>SUGARS & DISTILLERIES</p>
        <p>PAPER & PULP</p>
        <p>MARINE & DEFENCE</p>
        <p>METAL & MINING</p>
        <p>FOOD & BEVERAGE</p>
        <p>PETROCHEMICAL & REFINERIES </p>
        <p>SOLAR</p> <p>BUILDING</p>
        <p> HVAC</p>
        <p> FIRE FIGHTING</p> <p>AGRICULTURE & RESIDENTIAL</p>
      </div>
    </div>
  );
};

export default Product;
