import Header from "../components/header/Header";
import MenuIcon from "../assets/menuicon.svg";
import CartIcon from "../assets/carticon.svg";
import ProductList from "../components/productlist/ProductList";
import Footer from "../components/footer/Footer";
import "./MenuPage.scss";
import CartOverlay from "../components/cartoverlay/CartOverlay";
import { useCartStore } from "../store/useCartStore";

const Menu = () => {
  const { isCartOpen } = useCartStore();

  return (
    <div className="menuWrapper">
      <Header
        iconOne={<img src={MenuIcon} alt="hamburger menu" />}
        iconTwo={<img src={CartIcon} alt="cart icon" />}
      />
      <h1>Meny</h1>
      <ProductList />
      {isCartOpen && <CartOverlay />}
      <Footer />
    </div>
  );
};

export default Menu;
