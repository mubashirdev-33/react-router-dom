import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <main className="page">
      <h1>Product Details</h1>

      <div className="content-card">
        <h2>Product ID: {params.id}</h2>
      
        <Link className="button" to={`/products/${params.id}/reviews`}>
          View Reviews
        </Link>
      </div>
    </main>
  );
};

export default ProductDetails;