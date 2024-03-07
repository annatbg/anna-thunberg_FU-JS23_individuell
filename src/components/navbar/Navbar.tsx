import "./Navbar.scss";
import { IconProps } from "../../models/IconProps";

const Navbar: React.FC<IconProps> = ({ iconOne, iconTwo }) => {
  return (
    <div>
      <ul className="navbarList">
        <li>{iconOne}</li>
        <li>{iconTwo}</li>
      </ul>
    </div>
  );
};

export default Navbar;
