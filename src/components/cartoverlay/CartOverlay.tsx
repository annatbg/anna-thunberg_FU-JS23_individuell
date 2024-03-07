import "./CartOverlay.scss";

const CartOverlay = () => {
  return (
    <div className="overlayWrapper">
      <h1>Din beställning</h1>
      <ul>
        <li>
          <h3>Bryggkaffe</h3>
          <p>196kr</p>
        </li>
      </ul>

      <h2>Total</h2>
      <p>inkl moms + drönarleverans</p>
      <button>Take my money!</button>
    </div>
  );
};

export default CartOverlay;
