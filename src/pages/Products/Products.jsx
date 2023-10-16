import Card from "../../comp/Card/Card";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((myProducts) => setProducts(myProducts));
  }, []);
  return (
    <section className="mx-24">
      <h3 className="text-4xl text-center mb-10">All products</h3>
      <div className="flex flex-wrap justify-between space-y-10">
        {products.map((p) => (
          <Card products={p} />
        ))}
      </div>
    </section>
  );
};

export default Products;
