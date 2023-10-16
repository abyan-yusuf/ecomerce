import { Link } from "react-router-dom";
import Card from "../../comp/Card/Card";
import Swipper from "../../comp/Swipper/Swipper";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=9")
      .then((res) => res.json())
      .then((myProducts) => setProducts(myProducts));
  }, []);
  return (
    <section className=" mx-24">
      <Swipper />
      <h3 className="mt-28 text-center text-4xl mb-14">Recent Products</h3>
      <div className="flex flex-wrap justify-between space-y-10 mb-5 items-center">
        {products.map((p) => (
            <Card products={p} />
        ))}
      </div>
      <Link to="/products" className=" bg-slate-500 py-2 px-4 rounded-3xl">
        Show More
      </Link>
    </section>
  );
};

export default Home;
