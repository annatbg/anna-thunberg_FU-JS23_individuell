import { useCartStore } from "../../store/useCartStore";
import "./Badge.scss";

const Badge = () => {
  // Använda useCartStore för att hämta getTotalItems-funktionen och kalla på den för att få det totala antalet varor
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <>
      {totalItems > 0 && (
        <div className="badgeCartItems">
          <p>{totalItems}</p>
        </div>
      )}
    </>
  );
};

export default Badge;
