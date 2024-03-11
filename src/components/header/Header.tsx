import Navbar from "../navbar/Navbar";
import "./Header.scss";
import HeaderImage from "../../assets/headerimg.svg";
import { IconProps } from "../../models/IconProps";

const Header: React.FC<IconProps> = ({ iconOne, iconTwo }) => {
  return (
    <>
      <img className="headerImg" src={HeaderImage} alt="header image" />
      <Navbar iconOne={iconOne} iconTwo={iconTwo} />
    </>
  );
};

export default Header;
