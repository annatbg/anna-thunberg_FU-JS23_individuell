import "./Navbar.scss";
import { IconProps } from "../../models/IconProps";
// import Ellipse from "../../assets/Ellipse 10.png";

const Navbar: React.FC<IconProps> = ({ iconOne, iconTwo }) => {
  return (
    <div className="navbarWrapper">
      <ul className="navbarList">
        <li className="menu">{iconOne}</li>
        {/* <li>
          <img className="ellipse" src={Ellipse} alt="ellipse" />
        </li> */}
        <li className="cart">{iconTwo}</li>
      </ul>
    </div>
  );
};

export default Navbar;
