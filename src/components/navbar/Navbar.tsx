import "./Navbar.scss";
import { IconProps } from "../../models/IconProps";
import { useCartStore } from "../../store/useCartStore";
import { useMenuStore } from "../../store/useMenuStore";
import Badge from "../badge/Badge";

const Navbar: React.FC<IconProps> = ({ iconOne, iconTwo }) => {
  const { toggleCart } = useCartStore();
  const { toggleMenu } = useMenuStore();

  return (
    <div className="navbarWrapper">
      <ul className="navbarList">
        <li className="menu" onClick={toggleMenu}>
          {iconOne}
        </li>

        <li className="cart" onClick={toggleCart}>
          {iconTwo}
        </li>
        <Badge />
      </ul>
    </div>
  );
};

export default Navbar;
