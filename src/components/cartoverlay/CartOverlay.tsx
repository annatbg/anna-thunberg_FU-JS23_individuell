import "./CartOverlay.scss";
import { useCartStore } from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const CartOverlay = () => {
  const { cartItems, increment, decrement, emptyCart, closeCart, isCartOpen } =
    useCartStore();

  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        closeCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeCart]);

  const navigate = useNavigate();

  const totalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 0),
      0
    );
  };

  return (
    <div
      className={`overlayWrapper ${isCartOpen ? "open" : ""}`}
      ref={overlayRef}
    >
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

      <div className="cartBtns">
        <button className="closeCartBtn" onClick={closeCart}>
          Close Cart
        </button>

        <button className="emptyCartBtn" onClick={emptyCart}>
          Empty Cart
        </button>
      </div>

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
