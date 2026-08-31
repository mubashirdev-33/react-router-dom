import { useParams } from "react-router-dom";

const ProductReviews = () => {
  const params = useParams();

  return (
    <main className="page">
      <h1>Product Reviews</h1>

      <div className="content-card">
        <h2>Product ID: {params.id}</h2>
        <p>Reviews for this product.</p>
        
      </div>
    </main>
  );
};

export default ProductReviews;