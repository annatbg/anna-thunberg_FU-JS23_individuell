import Header from "../components/header/Header";
import { IconProps } from "../models/IconProps";
import MenuIcon from "../assets/menuicon.svg";
import CartIcon from "../assets/carticon.svg";
import Footer from "../components/footer/Footer";
import CartOverlay from "../components/cartoverlay/CartOverlay";
import "./CartPage.scss";

const Cart: React.FC<IconProps> = () => {
  return (
    <>
      <div className="cartWrapper">
        <Header
          iconOne={<img src={MenuIcon} alt="hamburger menu" />}
          iconTwo={<img src={CartIcon} alt="cart icon" />}
        />
        <CartOverlay />
        <Footer />
      </div>
    </>
  );
};
export default Cart;
