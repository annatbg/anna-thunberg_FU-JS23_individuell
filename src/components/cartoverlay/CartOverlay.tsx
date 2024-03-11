import "./CartOverlay.scss";
import { useCartStore } from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";

const CartOverlay = () => {
  const { cartItems, increment, decrement, emptyCart } = useCartStore();

  const navigate = useNavigate();

  const totalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="overlayWrapper">
      <h1>Din beställning</h1>
      <ul className="cartList">
        {cartItems.map((item) => (
          <li className="cartItem" key={item.id}>
            <div className="cartProduct">
              <h3>{item.name}</h3>
              <p>{item.price} kr</p>
            </div>
            <div className="counter">
              <button className="counterBtn" onClick={() => increment(item.id)}>
                ⌃
              </button>
              <p>{item.quantity}</p>
              <button className="counterBtn" onClick={() => decrement(item.id)}>
                ⌄
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="bottomText">
        <h2>Total {totalPrice()} kr </h2>
        <p>inkl moms + drönarleverans</p>
      </div>

      <button className="emptyCartBtn" onClick={emptyCart}>
        Empty Cart
      </button>
      <button
        className="checkoutBtn"
        onClick={() => setTimeout(() => navigate("/status"), 1000)}
      >
        Take my money!
      </button>
    </div>
  );
};

export default CartOverlay;
