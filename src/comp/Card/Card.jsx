import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Card = ({ products }) => {
  return (
    <Link to={`/products/${products.id}`}>
      <div className="card w-80 shadow-xl bg-slate-800">
        <figure className="bg-white">
          <img src={products.image} className="h-56 w-auto" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{"Tk. " + products.title}</h2>
          <p>{products.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
