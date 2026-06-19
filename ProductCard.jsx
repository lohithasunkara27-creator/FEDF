import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <Link 
      to={`/products/${product.id}`}
      className="product-link"
    >
      <div className="product-card">

        <img
          src={product.image}
          alt={product.name}
        />

        <h3>{product.name}</h3>

        <p>₹{product.price}</p>

        <p>⭐ {product.rating}</p>
        <button
 className="remove-btn"

 onClick={() =>
 removeProduct(product.id)
 }
>

Remove ❌

</button>

        <p>{product.website}</p>

      </div>
    </Link>
  );
}

export default ProductCard;