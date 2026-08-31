import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mobile", price: 700 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Keyboard", price: 80 },
  ];

  return (
    <main className="page">
      <h1>Products</h1>

      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>

            <Link className="button" to={`/products/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;