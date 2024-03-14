import "./Navbar.scss";
import { IconProps } from "../../models/IconProps";
import { useCartStore } from "../../store/useCartStore";
import { useMenuStore } from "../../store/useMenuStore";
import Badge from "../badge/Badge";
import { useLocation } from "react-router-dom";

const Navbar: React.FC<IconProps> = ({ iconOne, iconTwo }) => {
  const { toggleCart } = useCartStore();
  const { toggleMenu } = useMenuStore();

  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <div className="navbarWrapper">
      <ul className="navbarList">
        <li className="menu" onClick={toggleMenu}>
          {iconOne}
        </li>

        {!isAboutPage && (
          <li className="cart" onClick={toggleCart}>
            {iconTwo}
          </li>
        )}

        {!isAboutPage && <Badge />}
      </ul>
    </div>
  );
};

export default Navbar;
