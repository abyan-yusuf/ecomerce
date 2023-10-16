import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Details = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((myProducts) => setProducts(myProducts));
  }, []);
  console.log(products);
  return (
    <section className="mx-24">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="h-96">
          <img src={products.image} alt="Movie" className="h-auto min-w-fit max-w-full w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{products.title}</h2>
          <p>{products.description}</p>
          <h4 className="font-medium text-2xl mb-10">
            {"Tk. " + products.price}
          </h4>
          {/* <h4 className="text-xl font-normal">{products.rating.rate}</h4> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
