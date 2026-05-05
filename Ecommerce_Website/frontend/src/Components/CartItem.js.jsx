import React from "react";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const { productId, name, price, quantity , image } = item;

  return (
    <div className="cart-item">
        <img src={image} alt={name} className="cart-item-img" />
      <div className="item-details">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Subtotal: ${price * quantity}</p>
      </div>

      <div className="item-actions">
        <button
          onClick={() => onUpdateQuantity(productId, quantity - 1)}
          disabled={quantity <= 1}
          className="btn-qty"
        >
          -
        </button>

        <span className="qty">{quantity}</span>

        <button
          onClick={() => onUpdateQuantity(productId, quantity + 1)}
          className="btn-qty"
        >
          +
        </button>

        <button
          onClick={() => onRemove(productId)}
          className="btn-remove"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
