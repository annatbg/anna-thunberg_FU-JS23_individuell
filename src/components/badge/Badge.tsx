import { useCartStore } from "../../store/useCartStore";
import "./Badge.scss";

const Badge = () => {
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
