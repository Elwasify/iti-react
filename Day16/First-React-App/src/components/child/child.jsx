import "./child.css";

export default function Child({ userName, productDetails }) {
  const { productName, price, quantity, onSale } = productDetails;

  return (
    <div className="child-container">
      <h2>Child</h2>

      <div className="product-card">
        <h3>Product Details</h3>

        <p>
          <span>Product Name:</span> {productName}
        </p>

        <p>
          <span>Price:</span> {price} EGP
        </p>

        <p>
          <span>Quantity:</span> {quantity}
        </p>

        <p>
          <span>User Name:</span> {userName}
        </p>

        <div className={onSale ? "sale active" : "sale"}>
          {onSale ? "🔥 50% OFF" : "No Sale"}
        </div>
      </div>
    </div>
  );
}