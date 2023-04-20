import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import React from "react";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Come lets we see some of my projects</h1>
        <p className="pl-desc">
          It is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning interior styles & a whole lot more awaits
          inside.
        </p>
        {/* <h3 className="register">
        !!Please click on the picture to register for a free quote!!
        </h3> */}
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;