import { useState } from "react";
import Child from "../child/child";
import "./parent.css";

export default function Parent() {
  const [userName] = useState("Ahmed");

  const [product] = useState({
    productName: "Apple iPhone 13",
    price: 8000,
    quantity: 200,
    onSale: true
  });

  return (
    <div className="parent-container">
      <h1 className="parent-title">
        Parent
      </h1>

      <Child
        userName={userName}
        productDetails={product}
      />
    </div>
  );
}